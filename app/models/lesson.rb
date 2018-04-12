class Lesson < ApplicationRecord
  has_many :completed_lessons
  has_many :users, through: :completed_lessons
end
