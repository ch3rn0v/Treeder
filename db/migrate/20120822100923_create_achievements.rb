class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.string :name
      t.text :description
      t.string :picture_url

      t.timestamps
    end
  end
end
