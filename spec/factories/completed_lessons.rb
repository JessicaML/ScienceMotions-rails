FactoryBot.define do
  factory :completed_lesson do
    lesson_id {1}
    user_id {1}
    completed {true}
  end
end
