require 'test_helper'

class PhysicsControllerTest < ActionDispatch::IntegrationTest
  test "should get solarsystem" do
    get physics_solarsystem_url
    assert_response :success
  end

end
