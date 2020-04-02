class CompletedLesson < ApplicationRecord
	belongs_to :user
	belongs_to :lesson

	before_validation :set_default_to_completed

	private

	def set_default_to_completed
		self.completed ||= true
	end
end
