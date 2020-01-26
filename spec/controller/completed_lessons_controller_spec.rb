require "rails_helper"

RSpec.describe CompletedLessonsController, type: :controller do
  login_user
  describe 'index' do  
    it "should go to the index page" do
      get 'index'
      expect(response).to render_template "completed_lessons/index"
    end
  end 

  describe 'create' do
    it 'successfully creates a new lesson' do
      lesson = FactoryBot.create(:lesson)
      completed_lesson = FactoryBot.create(:completed_lesson)
      expect(CompletedLesson.last.completed).to eq(true)
      expect(response.status).to eq(200)
    end
  end

  describe 'update' do
    it "updates the requested lesson" do
      lesson = FactoryBot.create(:lesson)
      completed_lesson = FactoryBot.create(:completed_lesson)
      patch :togglelesson, params: {
        id: completed_lesson.id, completed_lesson: { completed: false }
      }
      completed_lesson.reload
      expect(completed_lesson.completed).to eq(false)
      expect(response).to redirect_to(lesson_url(id: lesson.id))

    end
  end
end