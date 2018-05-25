class ChemistryController < ApplicationController

  def indicators
  end
  def periodictable
  end

  def show
    @completed_lessons = @lesson.completed_lessons.all
    @completed_lesson = @lesson.completed_lessons.build
  end

end
