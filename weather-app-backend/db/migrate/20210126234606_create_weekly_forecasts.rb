class CreateWeeklyForecasts < ActiveRecord::Migration[6.0]
  def change
    create_table :weekly_forecasts do |t|
      t.string :location

      t.timestamps
    end
  end
end
