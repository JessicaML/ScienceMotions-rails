class CompletedLesson < ApplicationRecord
	belongs_to :user, :optional => false
	belongs_to :lesson, :optional => true
end
