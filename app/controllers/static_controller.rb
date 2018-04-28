class StaticController < ApplicationController
	#/static/index
	# def show
	# 	# render template: "static/#{params[:index]}"
	# 	render template: "static/"

 #    end

  def index
    @statics = Static.all
  end

  # def show
  #   @completed_lessons = @statics.completed_lessons.all
  #   @completed_lesson = @statics.completed_lessons.build
  # end
end
