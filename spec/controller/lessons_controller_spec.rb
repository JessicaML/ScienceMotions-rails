require "rails_helper"

RSpec.configure do |config|
  config.include Devise::Test::ControllerHelpers, type: :controller
end

RSpec.describe LessonsController, type: :controller do
  describe "routing" do
    it "should go to the index page" do
      get 'index'
      response.should render_template "lessons"
    end
  end

  describe 'create' do
    it 'successfully creates a new lesson' do
      lesson = Lesson.create(name: "test", description: "asdf", slug: "asdf")
      expect(Lesson.last.name).to eq("test")
    end
  end
end