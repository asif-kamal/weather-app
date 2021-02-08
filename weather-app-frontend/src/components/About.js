import React from 'react';
import { Link } from 'react-router-dom';
import meditation from '../meditation.jpeg'

function About () {
    return(
        <div>
        <h2>About</h2>
        <p>
            Dear users, this app has been developed to help record how the weather forecast affects mood depending on the city. 
            Our hopes are in the future we will collect the note data and find patterns in the overall psychological state in order
            to alleviate depression and anxiety.
        </p>
        <Link to={"/"}>Forecast Page</Link>
        <br></br>
        <img src={meditation} alt="meditation-near-lake" />;
        </div>
    )
}
export default About;