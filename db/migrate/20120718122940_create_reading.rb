class CreateReading < ActiveRecord::Migration
  def change
    create_table :readings do |t|
      t.integer :user_id
      t.integer :text_id
      t.integer :achievment_id
      t.integer :speed
      t.string  :time

      t.timestamps
    end
  end
end
