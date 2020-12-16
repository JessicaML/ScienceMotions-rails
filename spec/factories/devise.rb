FactoryBot.define do
    factory :admin do
      id {2}
      email {"test@admin.com"}
      password {"qwerty"}
      admin {true}
    end
end

  
  