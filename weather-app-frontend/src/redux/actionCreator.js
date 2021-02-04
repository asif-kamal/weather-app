

export const getWeather = (event) => ({
    return (dispatch) => {
        const city = event.target.value;
        const APIKEY = process.env['REACT_APP_WEATHER_API_KEY']
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKEY}`
        fetch(WEATHER_URL)
              .then(res => res.json())
              .then(data => {const dailyData = data.list.filter(reading => reading.dt_txt.includes("06:00:00"))
                dispatch({
                type: "SET_DAY_FORECAST",
                payload: dailyData
              }
    

    
})
