class CreateTexts < ActiveRecord::Migration
  def change
    create_table :texts do |t|
      t.integer :user_id
      t.text :content
      t.text :description

      t.timestamps
    end
  end
end