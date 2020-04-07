FactoryBot.define do
  factory :user do
    email { 'test@user.com' }
    password { 'qwerty' }
    password_confirmation { 'qwerty' }
  end
end
