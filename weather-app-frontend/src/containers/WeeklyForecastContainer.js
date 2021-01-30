import React, { Component } from 'react';


class WeeklyForecastContainer extends Component {

    state = {
        weeklyForecast: [],
        dayForecast: []
      }

      render(){
        return <h1>weekly forecast container</h1>
    }

    componentDidMount(){
        const APIKEY = process.env['REACT_APP_WEATHER_API_KEY']
        const city = "Chicago"
        const WEATHER_URL = `api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`
        fetch(WEATHER_URL)
            .then(res => res.json())
            .then(data => console.log(data.list))
            .catch(err => console.log(err))
    } 

   
}

export default WeeklyForecastContainer
