class AddCityToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :city, :string
  end
end
