require "rails_helper"

RSpec.describe CompletedLessonsController, type: :controller do

  describe 'index' do  
    it "should go to the index page" do
      user = FactoryBot.create(:user)
      sign_in user
      get 'index'
      expect(response).to render_template "completed_lessons/index"
    end
  end 

  describe 'create' do
    it 'successfully creates a new completed_lesson in db' do
      user = FactoryBot.create(:user)
      sign_in user
      lesson = FactoryBot.create(:lesson)
      count_before = CompletedLesson.count
      post(:create, params: { completed_lesson: FactoryBot.attributes_for(:completed_lesson, lesson_id: lesson.id)})
      count_after = CompletedLesson.count
      expect(count_after).to eq(count_before + 1)
      expect(CompletedLesson.last.completed).to eq(true)
      expect(response).to redirect_to("#{lesson_path(lesson)}#mark-complete")
      expect(response.status).to eq(302)
    end
  end

  describe 'update' do
    it "updates the requested lesson" do
      user = FactoryBot.create(:user)
      lesson = FactoryBot.create(:lesson)
      sign_in user
      completed_lesson = FactoryBot.create(:completed_lesson, user: user, lesson_id: lesson.id)
      put :togglelesson, params: {
        id: completed_lesson, completed: false
      }
      completed_lesson.reload
      expect(completed_lesson.completed).to eq(false)
      expect(response).to redirect_to(lesson_url(slug: completed_lesson.lesson.slug, anchor: 'mark-complete'))
    end
  end
end