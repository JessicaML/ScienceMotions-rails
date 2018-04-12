class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :completed_lessons
  has_many :lessons, through: :completed_lessons

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
