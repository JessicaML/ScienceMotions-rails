require "rails_helper"

RSpec.describe LessonsController, type: :controller do
    describe 'create' do
      it 'successfully creates a new lesson' do
        lesson = Lesson.create(name: "test", description: "asdf", slug: "asdf")
        expect(Lesson.last.name).to eq("test")
      end
    end
  end