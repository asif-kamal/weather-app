import React, { Component } from 'react';
import DayForecastCard from '../components/DayForecastCard'
import {connect} from 'react-redux' 
import SearchForm from '../components/SearchForm';


class WeeklyForecastContainer extends Component {

   
    
       
        


    // componentDidMount(){
    //     const APIKEY = process.env['REACT_APP_WEATHER_API_KEY']
    //     const city = "Chicago"
    //     const WEATHER_URL = `api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`
    //     fetch(WEATHER_URL)
    //         .then(res => res.json())
    //         .then(data => console.log(data.list))
    //         .catch(err => console.log(err))
    // } 

    
         createDayCards = (props) => {
                return this.props.weeklyForecast.map((forecast, index) => <DayForecastCard forecast={forecast} key={index} />)
            }
    

            render(){
                return(
                <div className="container">
                    <h1 className="display-3">Forecast</h1>
                    <SearchForm />
                    <div className="row-justify-content-center">
                    {this.createDayCards()}</div>
                    </div>
                )
            }
}

const mapStateToProps = (state) => ({
    weeklyForecast: state.weeklyForecast
})



export default connect(mapStateToProps)(WeeklyForecastContainer)

