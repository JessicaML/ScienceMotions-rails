class RemoveCompletedFromCompletedLesson < ActiveRecord::Migration[5.1]
  def change
    remove_column :completed_lessons, :completed
  end
end
