# -*- encoding: utf-8 -*-
# stub: sinatra 1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "sinatra".freeze
  s.version = "1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Blake Mizerany".freeze, "Ryan Tomayko".freeze, "Simon Rozet".freeze]
  s.date = "2010-03-23"
  s.description = "Classy web-development dressed in a DSL".freeze
  s.email = "sinatrarb@googlegroups.com".freeze
  s.extra_rdoc_files = ["README.rdoc".freeze, "LICENSE".freeze]
  s.files = ["LICENSE".freeze, "README.rdoc".freeze]
  s.homepage = "http://sinatra.rubyforge.org".freeze
  s.rdoc_options = ["--line-numbers".freeze, "--inline-source".freeze, "--title".freeze, "Sinatra".freeze, "--main".freeze, "README.rdoc".freeze]
  s.rubyforge_project = "sinatra".freeze
  s.rubygems_version = "2.6.13".freeze
  s.summary = "Classy web-development dressed in a DSL".freeze

  s.installed_by_version = "2.6.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 2

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rack>.freeze, [">= 1.0"])
      s.add_development_dependency(%q<shotgun>.freeze, ["< 1.0", ">= 0.6"])
      s.add_development_dependency(%q<rack-test>.freeze, [">= 0.3.0"])
      s.add_development_dependency(%q<haml>.freeze, [">= 0"])
      s.add_development_dependency(%q<builder>.freeze, [">= 0"])
      s.add_development_dependency(%q<erubis>.freeze, [">= 0"])
      s.add_development_dependency(%q<less>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rack>.freeze, [">= 1.0"])
      s.add_dependency(%q<shotgun>.freeze, ["< 1.0", ">= 0.6"])
      s.add_dependency(%q<rack-test>.freeze, [">= 0.3.0"])
      s.add_dependency(%q<haml>.freeze, [">= 0"])
      s.add_dependency(%q<builder>.freeze, [">= 0"])
      s.add_dependency(%q<erubis>.freeze, [">= 0"])
      s.add_dependency(%q<less>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rack>.freeze, [">= 1.0"])
    s.add_dependency(%q<shotgun>.freeze, ["< 1.0", ">= 0.6"])
    s.add_dependency(%q<rack-test>.freeze, [">= 0.3.0"])
    s.add_dependency(%q<haml>.freeze, [">= 0"])
    s.add_dependency(%q<builder>.freeze, [">= 0"])
    s.add_dependency(%q<erubis>.freeze, [">= 0"])
    s.add_dependency(%q<less>.freeze, [">= 0"])
  end
end
