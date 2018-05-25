require 'test_helper'

class ChemistryControllerTest < ActionDispatch::IntegrationTest
  test "should get indicators" do
    get chemistry_indicators_url
    assert_response :success
  end

end
