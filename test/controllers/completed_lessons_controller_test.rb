require 'test_helper'

class CompletedLessonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @completed_lesson = completed_lessons(:one)
  end

  test "should get index" do
    get completed_lessons_url
    assert_response :success
  end

  test "should get new" do
    get new_completed_lesson_url
    assert_response :success
  end

  test "should create completed_lesson" do
    assert_difference('CompletedLesson.count') do
      post completed_lessons_url, params: { completed_lesson: { completed: @completed_lesson.completed, lesson_id: @completed_lesson.lesson_id, user_id: @completed_lesson.user_id } }
    end

    assert_redirected_to completed_lesson_url(CompletedLesson.last)
  end

  test "should show completed_lesson" do
    get completed_lesson_url(@completed_lesson)
    assert_response :success
  end

  test "should get edit" do
    get edit_completed_lesson_url(@completed_lesson)
    assert_response :success
  end

  test "should update completed_lesson" do
    patch completed_lesson_url(@completed_lesson), params: { completed_lesson: { completed: @completed_lesson.completed, lesson_id: @completed_lesson.lesson_id, user_id: @completed_lesson.user_id } }
    assert_redirected_to completed_lesson_url(@completed_lesson)
  end

  test "should destroy completed_lesson" do
    assert_difference('CompletedLesson.count', -1) do
      delete completed_lesson_url(@completed_lesson)
    end

    assert_redirected_to completed_lessons_url
  end
end
