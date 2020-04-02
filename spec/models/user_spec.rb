require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { FactoryBot.build(:user)}

  it 'has a valid factory' do
    expect(user.validate!).to eq(true)
  end

  it { is_expected.to have_many(:completed_lessons) }

  it { is_expected.to have_many(:lessons).through(:completed_lessons) }

  it { is_expected.to validate_presence_of(:email) }

  it 'invalidates email format with no @' do
    user.email = 'email.com'
    expect(user.valid?).to eq(false)
  end

  it 'invalidates email format with no .' do
    user.email = 'user@email'
    expect(user.valid?).to eq(false)
  end

  it { is_expected.to validate_uniqueness_of(:email).case_insensitive }

  it { is_expected.to validate_length_of(:password).is_at_least(6).is_at_most(128) }

end

