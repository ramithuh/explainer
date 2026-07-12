#!/usr/bin/env ruby
# frozen_string_literal: true

require "set"
require "yaml"

ROOT = File.expand_path("..", __dir__)
REGISTRY = "architectures/index.yaml"
ARCHITECTURE_SCHEMA_VERSIONS = Set["architecture-v0.1", "architecture-v0.2"].freeze
VIEW_SCHEMA_VERSIONS = Set["visualization-v0.1", "visualization-v0.2", "visualization-v0.3"].freeze
SNAKE_CASE_ID = /\A[a-z][a-z0-9_]*\z/

@errors = []

def load_yaml(path)
  full_path = File.join(ROOT, path)
  unless File.exist?(full_path)
    @errors << "missing file: #{path}"
    return {}
  end
  YAML.load_file(full_path)
rescue Psych::SyntaxError => e
  @errors << "YAML syntax error in #{path}: #{e.message}"
  {}
end

def ids(items)
  Array(items).filter_map { |item| item["id"] }
end

def architecture_relations(arch)
  return Array(arch["relations"]) if arch.key?("relations")

  Array(arch["edges"])
end

def require_unique_ids(label, items)
  seen = Set.new
  ids(items).each do |id|
    @errors << "duplicate #{label} id: #{id}" if seen.include?(id)
    seen << id
  end
  seen
end

def require_evidence(label, item)
  evidence = item["evidence"]
  unless evidence.is_a?(Hash)
    @errors << "#{label} missing evidence"
    return
  end
  @errors << "#{label} missing evidence.status" unless evidence["status"]
  refs = evidence["refs"]
  @errors << "#{label} missing evidence.refs" if !refs.is_a?(Array) || refs.empty?
end

def architecture_ref_exists?(ref, module_ids, rep_ids, claim_ids, relation_ids = Set.new)
  kind, id = ref.to_s.split(".", 2)
  return false unless kind && id

  case kind
  when "modules"
    module_ids.include?(id)
  when "representations"
    rep_ids.include?(id)
  when "claims"
    claim_ids.include?(id)
  when "relations"
    relation_ids.include?(id)
  else
    false
  end
end

def collect_standard_blocks
  Dir[File.join(ROOT, "standard_blocks", "*.yaml")].each_with_object({}) do |path, blocks|
    rel = path.delete_prefix("#{ROOT}/")
    block = load_yaml(rel)
    next if block.empty?

    blocks[rel] = {
      "id" => block["id"],
      "slot_ids" => Set.new(Array(block["input_slots"]).map { |slot| slot["id"] } +
                             Array(block["output_slots"]).map { |slot| slot["id"] })
    }
  end
end

def lint_architecture(arch, standard_blocks)
  schema_version = arch["schema_version"]
  unless ARCHITECTURE_SCHEMA_VERSIONS.include?(schema_version)
    @errors << "unsupported architecture schema_version #{schema_version.inspect}"
  end
  if schema_version == "architecture-v0.2"
    @errors << "architecture-v0.2 source missing relations" unless arch.key?("relations")
    @errors << "architecture-v0.2 source still uses legacy edges" if arch.key?("edges")
  end

  module_ids = require_unique_ids("architecture module", arch["modules"])
  rep_ids = require_unique_ids("architecture representation", arch["representations"])
  claim_ids = require_unique_ids("architecture claim", arch["claims"])
  relations = architecture_relations(arch)
  relation_ids = if schema_version == "architecture-v0.2"
    require_unique_ids("architecture relation", relations)
  else
    Set.new(ids(relations))
  end
  relations_by_id = relations.each_with_object({}) do |relation, acc|
    relation_id = relation["id"]
    acc[relation_id] = relation if relation_id
  end
  known_nodes = module_ids | rep_ids

  if schema_version == "architecture-v0.2"
    relations.each_with_index do |relation, index|
      relation_id = relation["id"]
      @errors << "architecture relation at index #{index} missing id" unless relation_id
      if relation_id && !SNAKE_CASE_ID.match?(relation_id)
        @errors << "architecture relation id #{relation_id} is not snake_case"
      end
    end
  end

  Array(arch["representations"]).each { |rep| require_evidence("representation #{rep['id']}", rep) }
  Array(arch["modules"]).each do |mod|
    require_evidence("module #{mod['id']}", mod)
    Array(mod.dig("contains")).each do |child|
      ref = child["standard_block_ref"]
      @errors << "module #{mod['id']} child #{child['id']} references missing standard block #{ref}" if ref && !standard_blocks.key?(ref)
    end
    ref = mod.dig("attention", "standard_block_ref")
    @errors << "module #{mod['id']} attention references missing standard block #{ref}" if ref && !standard_blocks.key?(ref)
  end

  relations.each do |relation|
    relation_id = relation["id"] || "#{relation['from']}->#{relation['to']}"
    from = relation["from"]
    to = relation["to"]
    @errors << "architecture relation #{relation_id} has unknown from node #{from}" unless known_nodes.include?(from)
    @errors << "architecture relation #{relation_id} has unknown to node #{to}" unless known_nodes.include?(to)
    require_evidence("architecture relation #{relation_id}", relation)
  end

  Array(arch["claims"]).each { |claim| require_evidence("claim #{claim['id']}", claim) }

  Hash(arch["state_semantics"]).each_key do |rep_id|
    @errors << "state_semantics references unknown representation #{rep_id}" unless rep_ids.include?(rep_id)
  end

  Array(arch["conditioning"]).each do |conditioning|
    ref = conditioning["standard_block_ref"]
    @errors << "conditioning #{conditioning['id']} references missing standard block #{ref}" if ref && !standard_blocks.key?(ref)
    source = conditioning["source"]
    target = conditioning["target"]
    if source && !rep_ids.include?(source) && !source.include?(".")
      @errors << "conditioning #{conditioning['id']} has unknown source #{source}"
    end
    relation_ref = conditioning["relation_ref"]
    if schema_version == "architecture-v0.2" && !relation_ref
      @errors << "conditioning #{conditioning['id']} missing relation_ref"
    elsif relation_ref
      relation = relations_by_id[relation_ref]
      unless relation
        @errors << "conditioning #{conditioning['id']} references unknown relation #{relation_ref}"
      else
        unless relation["kind"] == "conditioning"
          @errors << "conditioning #{conditioning['id']} relation #{relation_ref} must have kind conditioning"
        end
        source_node = source.to_s.split(".", 2).first
        target_node = target.to_s.split(".", 2).first
        unless relation["from"] == source_node && relation["to"] == target_node
          @errors << "conditioning #{conditioning['id']} resolves to #{source_node}->#{target_node}, but relation #{relation_ref} is #{relation['from']}->#{relation['to']}"
        end
      end
    end
    require_evidence("conditioning #{conditioning['id']}", conditioning)
  end

  Array(arch["scale_transitions"]).each do |transition|
    ref = transition["standard_block_ref"]
    @errors << "scale transition #{transition['id']} references missing standard block #{ref}" if ref && !standard_blocks.key?(ref)
    %w[source target index_map].each do |field|
      value = transition[field]
      next unless value
      @errors << "scale transition #{transition['id']} has unknown #{field} #{value}" unless rep_ids.include?(value)
    end
    require_evidence("scale transition #{transition['id']}", transition)
  end

  [module_ids, rep_ids, claim_ids, relation_ids, relations_by_id]
end

def architecture_flow_pairs(arch)
  pairs = Set.new
  architecture_relations(arch).each { |relation| pairs << [relation["from"], relation["to"]] }
  Array(arch["modules"]).each do |mod|
    Array(mod["inputs"]).each { |rep| pairs << [rep, mod["id"]] }
    Array(mod["outputs"]).each { |rep| pairs << [mod["id"], rep] }
  end
  pairs
end

def lint_board_elision(board)
  board_id = board["id"]
  elided = Array(board["nodes"]).select { |node| node["elide"] }.map { |node| node["id"] }
  return if elided.empty?

  in_degree = Hash.new(0)
  out_degree = Hash.new(0)
  Array(board["edges"]).each do |edge|
    out_degree[edge["from"]] += 1
    in_degree[edge["to"]] += 1
  end

  elided.each do |node_id|
    if in_degree[node_id].zero? || out_degree[node_id].zero?
      @errors << "board #{board_id} node #{node_id} is elided but has no incoming or no outgoing edge; contraction would silently drop it"
    elsif in_degree[node_id] > 1 && out_degree[node_id] > 1
      @errors << "board #{board_id} node #{node_id} is elided with fan-in and fan-out (#{in_degree[node_id]}x#{out_degree[node_id]}); contraction would be ambiguous"
    end
  end
end

def lint_view(view, arch, module_ids, rep_ids, relations_by_id)
  schema_version = view["schema_version"]
  unless VIEW_SCHEMA_VERSIONS.include?(schema_version)
    @errors << "unsupported visualization schema_version #{schema_version.inspect}"
  end
  strict_provenance = schema_version == "visualization-v0.3"
  boards = Array(view["boards"])
  board_ids = require_unique_ids("board", boards)
  boards_by_id = boards.to_h { |board| [board["id"], board] }
  root = view["root_board"]
  @errors << "view root_board #{root} is not a board id" unless board_ids.include?(root)
  flow_pairs = architecture_flow_pairs(arch)

  boards.each do |board|
    board_id = board["id"]
    parent = board["parent"]
    @errors << "board #{board_id} references unknown parent #{parent}" if parent && !board_ids.include?(parent)
    @errors << "board #{board_id} cannot be its own parent" if parent == board_id
    column_sizing = board.dig("grid", "column_sizing")
    if column_sizing && !%w[uniform content].include?(column_sizing)
      @errors << "board #{board_id} has invalid grid.column_sizing #{column_sizing.inspect}"
    end
    node_ids = require_unique_ids("node on board #{board_id}", board["nodes"])
    nodes_by_id = Array(board["nodes"]).to_h { |node| [node["id"], node] }

    Array(board["nodes"]).each do |node|
      module_ref = node["module_ref"]
      rep_ref = node["rep_ref"]
      board_ref = node["board_ref"]
      @errors << "board #{board_id} node #{node['id']} has unknown module_ref #{module_ref}" if module_ref && !module_ids.include?(module_ref)
      @errors << "board #{board_id} node #{node['id']} has unknown rep_ref #{rep_ref}" if rep_ref && !rep_ids.include?(rep_ref)
      @errors << "board #{board_id} node #{node['id']} has unknown board_ref #{board_ref}" if board_ref && !board_ids.include?(board_ref)
      if strict_provenance && board_ref && boards_by_id[board_ref] && boards_by_id[board_ref]["parent"] != board_id
        @errors << "board #{board_id} node #{node['id']} opens #{board_ref}, but that board declares parent #{boards_by_id[board_ref]['parent'].inspect}"
      end
      if strict_provenance && node.key?("expandable")
        @errors << "board #{board_id} node #{node['id']} uses legacy expandable; use board_ref"
      end
      if node["expandable"]
        target = module_ref || node["id"]
        @errors << "board #{board_id} node #{node['id']} is expandable but target board #{target} is missing" unless board_ids.include?(target)
      end
    end

    Array(board["edges"]).each do |edge|
      from = edge["from"]
      to = edge["to"]
      @errors << "board #{board_id} edge #{from}->#{to} has unknown from node" unless node_ids.include?(from)
      @errors << "board #{board_id} edge #{from}->#{to} has unknown to node" unless node_ids.include?(to)
      connection = edge["connection"]
      unless connection.is_a?(Hash) && connection["title"] && connection["role"] && connection["inside"]
        @errors << "board #{board_id} edge #{from}->#{to} missing connection title/role/inside"
      end

      route_side = edge["route_side"]
      if route_side && !%w[top bottom left right].include?(route_side)
        @errors << "board #{board_id} edge #{from}->#{to} has invalid route_side #{route_side.inspect}"
      end
      if edge.key?("route_clearance")
        clearance = edge["route_clearance"]
        @errors << "board #{board_id} edge #{from}->#{to} sets route_clearance without route_side" unless route_side
        unless clearance.is_a?(Numeric) && clearance.positive?
          @errors << "board #{board_id} edge #{from}->#{to} route_clearance must be a positive number"
        end
      end

      from_ref = nodes_by_id.dig(from, "module_ref") || nodes_by_id.dig(from, "rep_ref")
      to_ref = nodes_by_id.dig(to, "module_ref") || nodes_by_id.dig(to, "rep_ref")
      relation_ref = edge["relation_ref"]
      view_only = edge["view_only"] == true

      if relation_ref && view_only
        @errors << "board #{board_id} edge #{from}->#{to} cannot set both relation_ref and view_only"
      elsif strict_provenance && !relation_ref && !view_only
        @errors << "board #{board_id} edge #{from}->#{to} must set relation_ref or view_only: true"
      end

      if relation_ref
        relation = relations_by_id[relation_ref]
        unless relation
          @errors << "board #{board_id} edge #{from}->#{to} references unknown relation #{relation_ref}"
          next
        end
        unless from_ref && to_ref
          @errors << "board #{board_id} edge #{from}->#{to} relation_ref #{relation_ref} requires architecture-backed endpoints"
          next
        end
        unless relation["from"] == from_ref && relation["to"] == to_ref
          @errors << "board #{board_id} edge #{from}->#{to} resolves to #{from_ref}->#{to_ref}, but relation #{relation_ref} is #{relation['from']}->#{relation['to']}"
        end
      elsif view_only && from_ref && to_ref
        @errors << "board #{board_id} edge #{from}->#{to} is view_only but both endpoints resolve to architecture objects #{from_ref}->#{to_ref}; add a canonical relation"
      elsif !strict_provenance && from_ref && to_ref && !flow_pairs.include?([from_ref, to_ref])
        @errors << "board #{board_id} edge #{from}->#{to} (architecture #{from_ref}->#{to_ref}) has no matching architecture relation or module input/output"
      end
    end

    lint_board_elision(board)
  end

  if strict_provenance && board_ids.include?(root)
    reachable = Set[root]
    queue = [root]
    until queue.empty?
      board = boards_by_id[queue.shift]
      Array(board && board["nodes"]).each do |node|
        board_ref = node["board_ref"]
        next unless board_ref && board_ids.include?(board_ref) && !reachable.include?(board_ref)

        reachable << board_ref
        queue << board_ref
      end
    end
    (board_ids - reachable).each do |board_id|
      @errors << "board #{board_id} is unreachable from root_board #{root} through board_ref"
    end
  end
end

def lint_pseudocode(program, module_ids, rep_ids, claim_ids, relation_ids, standard_blocks)
  source_ids = require_unique_ids("pseudocode source", program["sources"])
  symbol_ids = require_unique_ids("pseudocode symbol", program["symbols"])
  line_ids = require_unique_ids("pseudocode line", program["lines"])

  Array(program["symbols"]).each do |symbol|
    ref = symbol["architecture_ref"]
    next unless ref
    @errors << "symbol #{symbol['id']} has bad architecture_ref #{ref}" unless architecture_ref_exists?(ref, module_ids, rep_ids, claim_ids, relation_ids)
  end

  Array(program["lines"]).each do |line|
    Array(line["inputs"]).each do |input|
      @errors << "line #{line['id']} input #{input} is not a declared symbol" unless symbol_ids.include?(input)
    end
    Array(line["outputs"]).each do |output|
      next if symbol_ids.include?(output)
      next if module_ids.include?(output)
      @errors << "line #{line['id']} output #{output} is neither a symbol nor a module id"
    end
    Array(line["architecture_refs"]).each do |ref|
      @errors << "line #{line['id']} has bad architecture_ref #{ref}" unless architecture_ref_exists?(ref, module_ids, rep_ids, claim_ids, relation_ids)
    end
    Array(line["source_refs"]).each do |source_ref|
      source = source_ref["source"]
      @errors << "line #{line['id']} references unknown source #{source}" unless source_ids.include?(source)
    end
    ref = line["standard_block_ref"]
    @errors << "line #{line['id']} references missing standard block #{ref}" if ref && !standard_blocks.key?(ref)
    if ref && line.dig("visual", "slots")
      slot_ids = standard_blocks.dig(ref, "slot_ids") || Set.new
      line.dig("visual", "slots").each_key do |slot|
        @errors << "line #{line['id']} binds unknown slot #{slot} for #{ref}" unless slot_ids.include?(slot)
      end
    end
  end

  Array(program["claims"]).each do |claim|
    Array(claim["line_refs"]).each do |line_ref|
      @errors << "pseudocode claim #{claim['id']} references unknown line #{line_ref}" unless line_ids.include?(line_ref)
    end
    require_evidence("pseudocode claim #{claim['id']}", claim)
  end
end

def lint_standard_blocks(standard_blocks)
  standard_blocks.each do |ref, block|
    @errors << "standard block #{ref} missing id" unless block["id"]
    slot_ids = block["slot_ids"]
    @errors << "standard block #{ref} has no input/output slots" if slot_ids.empty?
  end
end

standard_blocks = collect_standard_blocks
registry = load_yaml(REGISTRY)

Array(registry["source_sets"]).each do |source_set|
  arch = load_yaml(source_set.fetch("architecture"))
  view = load_yaml(source_set.fetch("view"))
  program = load_yaml(source_set.fetch("pseudocode"))

  Array(source_set["standard_blocks"]).each do |ref|
    @errors << "registry set #{source_set['id']} references missing standard block #{ref}" unless standard_blocks.key?(ref)
  end

  module_ids, rep_ids, claim_ids, relation_ids, relations_by_id = lint_architecture(arch, standard_blocks)
  lint_view(view, arch, module_ids, rep_ids, relations_by_id)
  lint_pseudocode(program, module_ids, rep_ids, claim_ids, relation_ids, standard_blocks)
rescue StandardError => e
  @errors << "#{source_set.fetch('id')} lint failed: #{e.class}: #{e.message}"
end

lint_standard_blocks(standard_blocks)

if @errors.empty?
  puts "source lint ok"
else
  warn @errors.map { |error| "- #{error}" }.join("\n")
  exit 1
end
