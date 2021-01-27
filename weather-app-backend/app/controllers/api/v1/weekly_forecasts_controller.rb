class Api::V1::WeeklyForecastsController < ApplicationController
   
    def index
        weekly_forecasts = WeeklyForcasts.all
        render json: @weekly_forecasts
    end
end
