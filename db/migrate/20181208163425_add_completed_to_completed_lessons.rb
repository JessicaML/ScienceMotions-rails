class AddCompletedToCompletedLessons < ActiveRecord::Migration[5.1]
  def change
    add_column :completed_lessons, :completed, :boolean
  end
end
