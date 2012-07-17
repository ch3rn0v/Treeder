class RemoveUserIdFromText < ActiveRecord::Migration
  def up
    remove_column :texts, :user_id
      end

  def down
    add_column :texts, :user_id, :integer
  end
end
