require "rails_helper"

RSpec.describe Lesson, type: :model do
  it "has a name" do 
    lesson = Lesson.create!(name: "Lesson Name 1") 
    expect(lesson.name).to eq("Lesson Name 1") 
  end
end