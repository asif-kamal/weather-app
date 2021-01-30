import React from 'react'
import WeeklyForecastContainer from './containers/WeeklyForecastContainer'
import SearchBar from './components/SearchBar'

class App extends React.Component {

  state = {
    weeklyForecast: [],
    dailyForecast: []
    }

    render (){
      return (
        <div>
        <WeeklyForecastContainer />
        <SearchBar getData={this.handleSubmit}/>
        </div>
      )
      }
    

  handleSubmit(event) {
    event.preventDefault()
    const city = event.target.city.value;
    const APIKEY = process.env['REACT_APP_WEATHER_API_KEY']
        const WEATHER_URL = `api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`
        fetch(WEATHER_URL)
            .then(res => res.json())
            .then(data => {const dailyData = data.list.filter(reading => reading.dt_txt.includes("06:00:00"))
            console.log(dailyData)
              this.setState({
              weeklyForecast: data.list,
              dailyForecast: dailyData
            })
          })
        }
           
      }

  
      
  


  


export default App;
