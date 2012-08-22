class CreateAttainedAchievements < ActiveRecord::Migration
  def change
    create_table :attained_achievements do |t|
      t.integer :user_id
      t.integer :achievement_id

      t.timestamps
    end
  end
end
