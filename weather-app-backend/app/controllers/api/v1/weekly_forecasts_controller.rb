class Api::V1::WeeklyForecastsController < ApplicationController
   
    def index
        weekly_forecasts = WeeklyForecast.all
        render json: @weekly_forecasts
    end
end
