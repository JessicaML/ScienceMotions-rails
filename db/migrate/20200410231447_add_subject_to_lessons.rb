class AddSubjectToLessons < ActiveRecord::Migration[5.2]
  def change
    add_column :lessons, :subject, :string
  end
end
