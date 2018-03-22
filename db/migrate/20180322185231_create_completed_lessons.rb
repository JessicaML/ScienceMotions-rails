class CreateCompletedLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :completed_lessons do |t|
      t.integer :lesson_id
      t.integer :user_id
      t.boolean :completed

      t.timestamps
    end
  end
end
