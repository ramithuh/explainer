# frozen_string_literal: true

require "minitest/autorun"
require_relative "../lib/strict_yaml"
require_relative "../visualizers/atom14/build-data"

class Atom14VisualizerTest < Minitest::Test
  SOURCE = File.expand_path("../visualizers/atom14/atom14.yaml", __dir__)
  BACKBONE = %w[N CA C O].freeze

  def setup
    @atlas = StrictYaml.load_file(SOURCE)
    @residues = @atlas.fetch("residues")
  end

  def test_covers_the_twenty_standard_residues_once
    assert_equal 20, @residues.length
    assert_equal 20, @residues.map { |residue| residue.fetch("id") }.uniq.length
    assert_equal 20, @residues.map { |residue| residue.fetch("one_letter") }.uniq.length
  end

  def test_every_residue_has_fourteen_slots_and_the_shared_backbone
    @residues.each do |residue|
      slots = residue.fetch("slots")
      assert_equal 14, slots.length, residue.fetch("id")
      assert_equal BACKBONE, slots.first(4), residue.fetch("id")
      assert_equal slots.compact.uniq, slots.compact, residue.fetch("id")
    end
  end

  def test_every_bond_and_layout_atom_names_an_occupied_slot
    common_layout = @atlas.fetch("common_layout")
    @residues.each do |residue|
      atoms = residue.fetch("slots").compact
      layout = common_layout.merge(residue.fetch("layout"))
      assert_equal atoms.sort, layout.slice(*atoms).keys.sort, residue.fetch("id")

      residue.fetch("bonds").each do |atom_a, atom_b|
        assert_includes atoms, atom_a, "#{residue.fetch('id')} #{atom_a}"
        assert_includes atoms, atom_b, "#{residue.fetch('id')} #{atom_b}"
      end
    end
  end

  def test_categories_are_declared_and_nonempty
    category_ids = @atlas.fetch("categories").map { |category| category.fetch("id") }
    @residues.each do |residue|
      assert_includes category_ids, residue.fetch("category"), residue.fetch("id")
    end
    category_ids.each do |category_id|
      assert @residues.any? { |residue| residue.fetch("category") == category_id }, category_id
    end
  end

  def test_generated_browser_data_is_fresh
    assert Atom14DataBuild.check!
  end
end
