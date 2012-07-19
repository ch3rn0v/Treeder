class AddPercantageToReadings < ActiveRecord::Migration
  def change
    add_column :readings, :percentage, :integer

  end
end
