# class CompletedLessonsController < ApplicationController
#   before_action :load_lesson

#   def create
#     @completed_lessons = current_user.completed_lessons.create(completed_lesson_params.merge({ 
#      lesson:  @lesson }))

#     redirect_to @completed_lesson, notice: 'Completed lesson was successfully created.' 
#   end

#   private

#   def completed_lesson_params
#     params.require(:completed_lesson).permit(:lesson_id, :user_id, :completed)
#   end

#   def load_lesson
#     @lesson = Lesson.find(params[:lesson_id])
#   end
# end

