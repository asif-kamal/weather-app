import React, { Component } from 'react';

class WeeklyForecastContainer extends Component {

    componentDidMount(){
        const APIKEY = process.env['REACT_APP_WEATHER_API_KEY']
        console.log(APIKEY)
        const location = "chicago, il"
        const WEATHER_URL = `api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIKEY}`
        fetch(WEATHER_URL)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }   

    render(){
        return <h1>weekly forecast container</h1>
    }
}

export default WeeklyForecastContainer
