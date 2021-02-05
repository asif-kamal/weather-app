import React, { Component } from 'react';
import DayForecastCard from '../components/DayForecastCard'
import {connect} from 'react-redux' 
import SearchForm from '../components/SearchForm';


class WeeklyForecastContainer extends Component {

   
    

    
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

