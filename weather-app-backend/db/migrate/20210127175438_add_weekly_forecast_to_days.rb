class AddWeeklyForecastToDays < ActiveRecord::Migration[6.0]
  def change
    add_reference :days, :weekly_forecast, null: false, foreign_key: true
  end
end
