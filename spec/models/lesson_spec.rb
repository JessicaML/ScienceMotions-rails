require "rails_helper"

RSpec.describe Lesson, type: :model do
  it "has a name" do 
    lesson = Lesson.create!(name: "First Idea Name") 
    second_lesson = Lesson.create!(name: "Second Idea Name")
    expect(second_lesson.name).to eq("Second Idea Name") 
  end

  it "has a description" do
    lesson = Lesson.create!(description: "lesson-description") 
    second_lesson = Lesson.create!(description: "second-lesson-description") 
    expect(second_lesson.description).to eq("second-lesson-description")
  end

  it "has a slug" do
    lesson = Lesson.create!(slug: "lesson-url") 
    second_lesson = Lesson.create!(slug: "second-lesson-url") 
    expect(second_lesson.slug).to eq("second-lesson-url")
  end

  it "has a subject" do
    lesson = Lesson.create!(subject: "lesson-subject") 
    second_lesson = Lesson.create!(subject: "second-lesson-subject") 
    expect(second_lesson.subject).to eq("second-lesson-subject")
  end
end
