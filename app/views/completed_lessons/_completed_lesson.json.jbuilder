json.extract! completed_lesson, :id, :lesson_id, :user_id, :completed, :created_at, :updated_at
json.url completed_lesson_url(completed_lesson, format: :json)
