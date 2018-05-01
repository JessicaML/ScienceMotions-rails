class StaticController < ApplicationController
	def show
		render template: "static/#{params[:index]}"
    end
end
