class Day < ApplicationRecord
    belongs_to :weekly_forecast
    has_many :notes
end
