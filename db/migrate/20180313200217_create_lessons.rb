class CreateLessons < ActiveRecord::Migration[5.1]
	belongs_to :user
  def change
    create_table :lessons do |t|
      t.string :name
      t.text :description
      t.string :slug

      t.timestamps
    end
  end
end
