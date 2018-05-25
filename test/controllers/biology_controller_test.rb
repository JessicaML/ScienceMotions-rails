require 'test_helper'

class BiologyControllerTest < ActionDispatch::IntegrationTest
  test "should get eye" do
    get biology_eye_url
    assert_response :success
  end

end
