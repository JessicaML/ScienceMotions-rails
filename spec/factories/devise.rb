FactoryBot.define do

    factory :lesson do
        name {"test"}
        description {"qwerty"}
        slug {"slug"}
    end
  
    # Not used in this tutorial, but left to show an example of different user types
    # factory :admin do
    #   id {2}
    #   email {"test@admin.com"}
    #   password {"qwerty"}
    #   admin {true}
    # end
end

  
  