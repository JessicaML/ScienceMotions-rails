module CompletedLessonsHelper
  def is_complete?(completed)
    CompletedLesson.exists?(completed: completed)
  end
end
