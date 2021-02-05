import React from 'react';
import moment from 'moment';

const DayForecastCard = ({ forecast }) => {
        let newDate = new Date();
        const weekday = forecast.dt * 1000
        newDate.setTime(weekday)
      
        const imgURL = `owf owf-${forecast.weather[0].id} owf-5x`
      
        return (
          <div className="col-sm-2">
            <div className="card">
              <h3 className="card-title">{moment(newDate).format('dddd')}</h3> 
              <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
              <i className={imgURL}></i>
              <h2>{Math.round(forecast.main.temp)} °F</h2>
              <div className="card-body">
                <p className="card-text">{forecast.weather[0].description}</p>
              </div>
            </div>
          </div>
        )
      }
      
      export default DayForecastCard;

