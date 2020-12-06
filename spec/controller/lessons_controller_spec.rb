require "rails_helper"

RSpec.describe LessonsController, type: :controller do
  login_user
  describe 'index' do  
    it "should go to the index page" do
      get 'index'
      expect(response).to render_template "lessons/index"
    end
  end 

  describe 'show' do
    it 'should show field' do
      lesson = FactoryBot.create(:lesson)
      get :show, params: { slug: lesson.slug }
      expect(response.status).to eq(200)
    end
  end

  describe 'create' do
    it 'successfully creates a new lesson' do
      lesson = FactoryBot.create(:lesson)
      expect(Lesson.last.name).to eq("test")
    end
  end

  describe 'update' do
    it "updates the requested lesson" do
      lesson = FactoryBot.create(:lesson)
      patch :update, params: {
        slug: lesson.slug, lesson: { name: 'name2' }
      }
      lesson.reload
      expect(lesson.name).to eq("name2")
      expect(response).to redirect_to(lesson_url)

    end
  end

  describe 'destroy' do
    it "destroys the requested lesson" do
      lesson = FactoryBot.create(:lesson)
      expect {
        delete :destroy, params: { slug: lesson.slug }
      }.to change(Lesson, :count).by(-1)
    end

    it "redirects to the lesson list" do
      lesson = FactoryBot.create(:lesson)
        delete :destroy, params: { slug: lesson.slug }
      expect(response).to redirect_to(lessons_url)
    end
  end
end