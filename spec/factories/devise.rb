FactoryBot.define do

    factory :lesson do
      id {1}
      name {"test"}
      description {"qwerty"}
      slug {"slug"}
    end

    factory :completed_lesson do
      lesson_id {1}
      user_id {1}
      completed {true}
    end

    # Not used in this tutorial, but left to show an example of different user types
    # factory :admin do
    #   id {2}
    #   email {"test@admin.com"}
    #   password {"qwerty"}
    #   admin {true}
    # end
  end