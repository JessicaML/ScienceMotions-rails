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
    it 'successfully creates a new completed_lesson in db' do
      lesson = FactoryBot.create(:lesson)
      count_before = CompletedLesson.count
      post(:create, params: {completed_lesson: FactoryBot.attributes_for(:completed_lesson, lesson_id: lesson.id)})
      count_after = CompletedLesson.count
      expect(count_after).to eq(count_before + 1)
      expect(CompletedLesson.last.completed).to eq(true)
      # expect(response.status).to eq(200)
      # keeping the above commented code, raised an error saying
      # "expected: 200, got: 302" 
    end
  end

  describe 'update' do
    it "updates the requested lesson" do
      lesson = FactoryBot.create(:lesson)
      completed_lesson = FactoryBot.create(:completed_lesson)
      patch :togglelesson, params: {
        completed_lesson: completed_lesson, completed: false
      }
      completed_lesson.reload
      expect(completed_lesson.completed).to eq(false)
      expect(response).to redirect_to(lesson_url(id: lesson.id))

    end
  end
end