require "rails_helper"

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
end

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
      lesson = Lesson.create! 
      get :show, params: { id: lesson.id }
      expect(response.status).to eq(200)
    end
  end

  describe 'create' do
    it 'successfully creates a new lesson' do
      lesson = Lesson.create(name: "test", description: "asdf", slug: "asdf")
      expect(Lesson.last.name).to eq("test")
    end
  end
end