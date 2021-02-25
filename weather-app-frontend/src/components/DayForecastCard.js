import React from 'react';
import moment from 'moment';
import { useState } from 'react';
import { render } from 'react-dom';

// class DayForecastCard extends React.Component {
const DayForecastCard = ({ forecast }) => {

  // const initialState = {
  //   clicked: true
  // }
      // constructor(props) {
      //   super(props);
      //   this.state = {
      //     clicked: false
      //   };
      //   this.handleClick = this.handleClick.bind(this)
      // }

        let newDate = new Date();
        const weekday = forecast.dt * 1000
        newDate.setTime(weekday)
      
        const imgURL = `owf owf-${forecast.weather[0].id} owf-5x`

        const [clicked, setClicked] = useState(false)
        
        

        const handleClick = () => {
         setClicked(clicked => !clicked)
          // this.setState(prevState => ({clicked: !prevState.clicked}))
        }


      // render(){
      //   let newDate = new Date();
      //   const weekday = this.props.forecast.dt * 1000
      //   newDate.setTime(weekday)
      
      //   const imgURL = `owf owf-${this.props.forecast.weather[0].id} owf-5x`

        return (
          <div className="col-sm-2">
            <div className="card">
              <h3 className="card-title">{moment(newDate).format('dddd')}</h3> 
              <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
              <i className={imgURL}></i>
              <h2>{Math.round(forecast.main.temp)} °F</h2>
              <button
              onClick={handleClick}> Like {clicked ? "=D" : ""} </button>
              <div className="card-body">
                <p className="card-text">{forecast.weather[0].description}</p>
              </div>
            </div>
          </div>
        )
      }
    // }
    // }
      
      export default DayForecastCard;

