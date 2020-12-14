FactoryBot.define do

    # factory :lesson do
    #     name {"test"}
    #     description {"qwerty"}
    #     slug {"slug"}
    # end
  
    factory :admin do
      id {2}
      email {"test@admin.com"}
      password {"qwerty"}
      admin {true}
    end
end

  
  