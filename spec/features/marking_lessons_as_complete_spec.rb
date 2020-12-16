require 'rails_helper'

RSpec.describe 'Marking lessons as complete', type: :feature do
  before do
    @john = User.create!(email: "john@example.com", password: "password")
    @lesson = Lesson.create!(name: "Indicators", slug: "Indicators", description: "Indicators")
    @completed_lesson = CompletedLesson.create!(user: @john, lesson: @lesson)
  end

  scenario 'viewing the lessons' do
    when_i_go_to_the_home_page
    and_i_click_the_lessons_tab
    then_i_get_redirected_to_the_login_page
    and_i_click_the_lesson
    then_i_go_to_the_lesson_page
  end

  scenario 'marking a lesson as complete' do
    and_i_click_the_lesson
    then_i_go_to_the_lesson_page
    and_i_click_the_mark_complete_button
    then_i_see_that_the_lesson_has_been_marked_complete
    and_i_visit_the_completed_lessons_page
    and_the_completed_lesson_is_there
  end

  def when_i_go_to_the_home_page
    visit container_path
  end

  def and_i_click_the_lessons_tab
    click_on 'lessons'
  end

  def then_i_get_redirected_to_the_login_page
    fill_in 'Email', with: 'user.email'
    fill_in 'Password', with: 'user.password'
    click_on 'Login'
  end

  def and_i_click_the_lesson
    login_as(FactoryBot.create(:user))
    visit container_path
    click_on 'lessons'
    expect(page).to have_content(@lesson.name)
    click_on @lesson.name
  end

  def then_i_go_to_the_lesson_page
    expect(page).to have_selector("input", :class =>"mark-complete")
  end
     
  def and_i_click_the_mark_complete_button
    click_button 'mark complete'
  end

  def then_i_see_that_the_lesson_has_been_marked_complete
    expect(page).to have_content('Lesson Complete')
  end

  def and_i_visit_the_completed_lessons_page
    visit completed_lessons_path
  end

  def and_the_completed_lesson_is_there
    expect(page).to have_content(@lesson.name)
    expect(page).to have_selector("a", :text =>"mark incomplete")
  end
end
