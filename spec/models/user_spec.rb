require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { FactoryBot.build(:user)}

  it 'has a valid factory' do
    expect(user.validate!).to eq(true)
  end

  it { should have_many(:completed_lessons) }

  it { should have_many(:lessons).through(:completed_lessons) }

  it { is_expected.to validate_presence_of(:email) }

  it 'validates email format' do
    user.email = 'a'
    expect(user.valid?).to eq(false)
  end
  
  it 'validates email format' do
    user.email = 'user@email'
    expect(user.valid?).to eq(false)
  end

  it 'validates email format' do
    user.email = 'user@email.com'
    expect(user.valid?).to eq(true)
  end

  it { is_expected.to validate_uniqueness_of(:email).case_insensitive }

  it { is_expected.to validate_length_of(:password).is_at_least(6).is_at_most(128) }

end
