class CompletedLesson < ApplicationRecord
	belongs_to :user
	belongs_to :lesson

	private

	def set_default_to_completed
		self.completed ||= true
	end
end
