import React, { Component } from 'react';
import DayForecastCard from '../components/DayForecastCard'
import {connect} from 'react-redux' 
import SearchForm from '../components/SearchForm';
// import NotesList from '../components/NotesList';
import Header from '../components/Header';
import Navbar from '../components/Navbar';




class WeeklyForecastContainer extends Component {


    

    
         createDayCards = (props) => {
             
                return this.props.weeklyForecast.map((forecast, index) => <DayForecastCard forecast={forecast} key={index} />)
            }
    

            render(){
                return(
                <div className="container">
                    <Header />
                    <h1 className="display-3">Forecast</h1>
                    <SearchForm />
                    <Navbar />
                    {/* <NotesList /> */}
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

