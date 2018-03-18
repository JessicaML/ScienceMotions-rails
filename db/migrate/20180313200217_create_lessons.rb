class CreateLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :lessons do |t|
      t.string :name
      t.text :description
      t.string :slug

      t.timestamps
    end
  end
end
