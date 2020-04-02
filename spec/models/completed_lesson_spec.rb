require 'rails_helper'

RSpec.describe CompletedLesson, type: :model do
  context 'associations' do
    it { is_expected.to belong_to :user }
    it { is_expected.to belong_to :lesson }
  end

  describe "validates" do
    it("should have a default value of completed as true") do
      # GIVEN 
      # A new instance of a Completed Lesson without specifying the boolean value
      completed_lesson = FactoryBot.create(:completed_lesson)
      
      # WHEN 
      # Validations are triggered. 
      completed_lesson.valid?

      # THEN
      # We expect the boolean value of "completed" to be "true"
      expect(completed_lesson.completed?).to(eq(true)) 
    end
  end
end
