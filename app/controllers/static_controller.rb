class StaticController < ApplicationController
	#/static/index
	def show
		render template: "static/#{params[:index]}"
    end
end
