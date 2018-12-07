# -*- encoding: utf-8 -*-
# stub: taps 0.3.24 ruby lib

Gem::Specification.new do |s|
  s.name = "taps".freeze
  s.version = "0.3.24"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ricardo Chimal, Jr.".freeze]
  s.date = "2012-04-27"
  s.description = "A simple database agnostic import/export app to transfer data to/from a remote database.".freeze
  s.email = "ricardo@heroku.com".freeze
  s.executables = ["taps".freeze, "schema".freeze]
  s.files = ["bin/schema".freeze, "bin/taps".freeze]
  s.homepage = "http://github.com/ricardochimal/taps".freeze
  s.rubygems_version = "2.6.13".freeze
  s.summary = "simple database import/export app".freeze

  s.installed_by_version = "2.6.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rack>.freeze, [">= 1.0.1"])
      s.add_runtime_dependency(%q<rest-client>.freeze, ["< 1.7.0", ">= 1.4.0"])
      s.add_runtime_dependency(%q<sequel>.freeze, ["~> 3.20.0"])
      s.add_runtime_dependency(%q<sinatra>.freeze, ["~> 1.0.0"])
      s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.2"])
      s.add_development_dependency(%q<bacon>.freeze, [">= 0"])
      s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
      s.add_development_dependency(%q<rack-test>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rcov>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rack>.freeze, [">= 1.0.1"])
      s.add_dependency(%q<rest-client>.freeze, ["< 1.7.0", ">= 1.4.0"])
      s.add_dependency(%q<sequel>.freeze, ["~> 3.20.0"])
      s.add_dependency(%q<sinatra>.freeze, ["~> 1.0.0"])
      s.add_dependency(%q<sqlite3>.freeze, ["~> 1.2"])
      s.add_dependency(%q<bacon>.freeze, [">= 0"])
      s.add_dependency(%q<mocha>.freeze, [">= 0"])
      s.add_dependency(%q<rack-test>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rcov>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rack>.freeze, [">= 1.0.1"])
    s.add_dependency(%q<rest-client>.freeze, ["< 1.7.0", ">= 1.4.0"])
    s.add_dependency(%q<sequel>.freeze, ["~> 3.20.0"])
    s.add_dependency(%q<sinatra>.freeze, ["~> 1.0.0"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.2"])
    s.add_dependency(%q<bacon>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, [">= 0"])
    s.add_dependency(%q<rack-test>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rcov>.freeze, [">= 0"])
  end
end
