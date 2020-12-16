FactoryBot.define do
  factory :lesson do
    id { 1 }
    name { "test" }
    description { "Indicators" }
    slug { "Indicators" }
    
    trait :completed_lessons do
      content factory: [:completed_lessons]
    end
  end
end
