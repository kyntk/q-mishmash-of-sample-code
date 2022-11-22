# frozen_string_literal: true

require_relative "lib/greeting/version"

Gem::Specification.new do |spec|
  spec.name = "greeting"
  spec.version = Greeting::VERSION
  spec.authors = ["kyntk"]
  spec.email = ["kyntk1128@gmail.com"]

  spec.summary = "Greeting gem written in Rust."
  spec.homepage = "https://github.com/kyntk/q-mishmash-of-sample-code/tree/main/rust-gem-greeting"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.0.0"
  spec.extensions = ["Cargo.toml"]

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "https://github.com/kyntk/q-mishmash-of-sample-code/blob/main/rust-gem-greeting/CHANGELOG.md"

  spec.files = ["Cargo.toml", "Cargo.lock", "src/lib.rs"]
end
