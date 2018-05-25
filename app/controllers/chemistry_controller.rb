class ChemistryController < ApplicationController
  def indicators
  end

  def show
    @completed_lessons = @lesson.completed_lessons.all
    @completed_lesson = @lesson.completed_lessons.build
  end

  def new
    @indicator = Indicator.new
  end

  def update
    respond_to do |format|
      if @indicator.update(lesson_params)
        format.html { redirect_to @indicator, notice: 'Lesson was successfully updated.' }
        format.json { render :show, status: :ok, location: @indicator }
      else
        format.html { render :edit }
        format.json { render json: @indicator.errors, status: :unprocessable_entity }
      end
    end
  end

end
