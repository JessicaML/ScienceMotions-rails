require "rails_helper"

RSpec.describe CompletedLesson, type: :model do
  it "has a user_id" do  
    completed_lesson = CompletedLesson.create!(user_id: 1)     

    second_completed_lesson = CompletedLesson.create!(user_id: 2) 

    expect(second_completed_lesson.user_id).to eq(2)
end