require 'rails_helper'

RSpec.describe 'Marking lessons as complete', type: :feature do
  # subject(:user) { FactoryBot.build(:user)}
  # lesson = Lesson.create!(name: 'Indicators', description: 'Indicators', slug: 'Indicators') 
  subject(:lesson) { FactoryBot.build(:lesson)}
  subject(:completed_lesson) { FactoryBot.build(:completed_lesson)}


  scenario 'viewing a lesson' do
    when_i_go_to_the_home_page
    and_i_click_the_lessons_tab
    then_i_get_redirected_to_the_login_page
    and_i_click_the_lessons_tab
    and_i_click_on_a_lesson
    then_i_should_see_the_lesson
  end

  # scenario 'marking a lesson as complete' do
  #   when_i_go_to_the_home_page
  #   and_i_click_the_lessons_tab
  #   then_i_get_redirected_to_the_login_page
  #   and_i_click_the_lessons_tab
  #   and_i_click_on_a_lesson
  #   then_i_should_see_the_lesson
    # and_i_mark_it_as_complete
    # and_i_go_to_my_completed_lessons
    # then_i_see_my_completed_lessons
    # and_i_click_mark_as_incomplete
    # then_i_should_go_to_that_lesson_again
  # end

  # scenario 'when_i_go_the_login_page' do
  #   # when_i_go_the_login_page
  #   # then_i-get_redirected_to_the_login_page
  #   # and_i_log_in
  #   # and_i_go_to_x_page
  #   # and_i_click_the_lessons_tab
  #   # and_i_click_on_a_lesson
  #   # and_i_mark_it_as_complete
  #   # and_i_go_to_my_completed_lessons
  #   # then_i_see_my_completed_lessons
  #   # and_i_click_mark_as_incomplete
  #   # then_i_should_go_to_that_lesson_again
  # end

  def when_i_go_to_the_home_page
    visit container_path
  end

  def and_i_click_the_lessons_tab
    click_on 'lessons'
  end

  def when_i_go_to_the_home_page
    visit container_path
    
    click_on 'lessons'
  end

  def then_i_get_redirected_to_the_login_page
    fill_in 'Email', with: 'user.email'
    fill_in 'Password', with: 'user.password'
    click_on 'Login'
  end

  def and_i_click_the_lessons_tab_again
    login_as(FactoryBot.create(:user))

    visit container_path
    click_on 'lessons'
  end

  def and_i_click_on_a_lesson
    login_as(FactoryBot.create(:user))

    visit lesson_path(lesson)
    binding.pry
    click_on 'Indicators'
  end

  def then_i_should_see_the_lesson
    login_as(FactoryBot.create(:user))

    expect(page).to have_content("Indicators")
  end
end
