class CreateLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :lessons do |t|

      t.timestamps
    end
  end
end
