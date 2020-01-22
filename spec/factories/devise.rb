FactoryBot.define do
    factory :user do
      id {1}
      email {"test@user.com"}
      password {"qwerty"}
      # Add additional fields as required via your User model
    end

    # factory :lesson do
    #   id {1}
    #   name {"test"}
    #   description {"qwerty"}
    #   slug {"slug"}
    # end

    # factory :invalid_lesson, parent: :lesson do |f|
    #   f.name nil
    # end
  
    # Not used in this tutorial, but left to show an example of different user types
    # factory :admin do
    #   id {2}
    #   email {"test@admin.com"}
    #   password {"qwerty"}
    #   admin {true}
    # end
  end