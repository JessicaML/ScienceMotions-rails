# frozen_string_literal: true

class ContainerController < ApplicationController
  layout "application"
  
  def index
    @container_props = { name: "Stranger" }
  end
end
