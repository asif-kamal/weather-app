import React from 'react';
import { connect } from "react-redux";
import { getWeather } from "../redux/actionCreator"
import { useState } from 'react';


function SearchForm(props) {

    const [city, setCity] = useState('')

   const handleSubmit = (e) => {
       e.preventDefault();
       props.getWeather(city)
       console.log(city)

   }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Get Weather by City
            <input type="text" name="city" value={city} 
            onChange={(e) => setCity(e.target.value)}/>
            
        </label>
        <input type="submit" value="Submit" />

        </form>
    )
    }

    


export default connect(null, {getWeather})(SearchForm);
