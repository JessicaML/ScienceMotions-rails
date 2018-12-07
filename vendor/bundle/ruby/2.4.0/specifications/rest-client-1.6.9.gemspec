# -*- encoding: utf-8 -*-
# stub: rest-client 1.6.9 ruby lib

Gem::Specification.new do |s|
  s.name = "rest-client".freeze
  s.version = "1.6.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["REST Client Team".freeze]
  s.date = "2015-06-10"
  s.description = "A simple HTTP and REST client for Ruby, inspired by the Sinatra microframework style of specifying actions: get, put, post, delete.".freeze
  s.email = "rest.client@librelist.com".freeze
  s.executables = ["restclient".freeze]
  s.extra_rdoc_files = ["README.rdoc".freeze, "history.md".freeze]
  s.files = ["README.rdoc".freeze, "bin/restclient".freeze, "history.md".freeze]
  s.homepage = "https://github.com/rest-client/rest-client".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.6.13".freeze
  s.summary = "Simple HTTP and REST client for Ruby, inspired by microframework syntax for specifying actions.".freeze

  s.installed_by_version = "2.6.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<mime-types>.freeze, ["~> 1.16"])
      s.add_development_dependency(%q<rdoc>.freeze, [">= 2.4.2"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<webmock>.freeze, ["~> 1.4"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 2.4"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
    else
      s.add_dependency(%q<mime-types>.freeze, ["~> 1.16"])
      s.add_dependency(%q<rdoc>.freeze, [">= 2.4.2"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<webmock>.freeze, ["~> 1.4"])
      s.add_dependency(%q<rspec>.freeze, ["~> 2.4"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<mime-types>.freeze, ["~> 1.16"])
    s.add_dependency(%q<rdoc>.freeze, [">= 2.4.2"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<webmock>.freeze, ["~> 1.4"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.4"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
  end
end
