#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "optparse"
require_relative "../../lib/strict_yaml"

module Atom14DataBuild
  ROOT = File.expand_path("../..", __dir__)
  SOURCE = File.join(__dir__, "atom14.yaml")
  OUTPUT = File.join(__dir__, "atom14-data.js")

  module_function

  def render
    payload = StrictYaml.load_file(SOURCE)
    <<~JAVASCRIPT
      // Generated from visualizers/atom14/atom14.yaml. Do not edit by hand.
      export const atom14Atlas = #{JSON.pretty_generate(payload)};
    JAVASCRIPT
  end

  def write!
    File.write(OUTPUT, render)
    puts "Wrote #{OUTPUT.delete_prefix("#{ROOT}/")}"
  end

  def check!
    unless File.file?(OUTPUT) && File.binread(OUTPUT) == render
      warn "visualizers/atom14/atom14-data.js is stale; run ruby visualizers/atom14/build-data.rb"
      return false
    end

    puts "Atom14 browser data is fresh."
    true
  end
end

if $PROGRAM_NAME == __FILE__
  options = { check: false }
  OptionParser.new do |parser|
    parser.banner = "Usage: ruby visualizers/atom14/build-data.rb [--check]"
    parser.on("--check", "Verify that atom14-data.js matches atom14.yaml") do
      options[:check] = true
    end
  end.parse!

  exit(Atom14DataBuild.check! ? 0 : 1) if options[:check]

  Atom14DataBuild.write!
end
