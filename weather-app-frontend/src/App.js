import React from 'react'
import WeeklyForecastContainer from './containers/WeeklyForecastContainer'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  
 return(<>

    <Router>
      <Switch>
        <Route exact path={"/"} component={WeeklyForecastContainer} />
       
      </Switch>
    </Router>
    </>
  
 );
 }


export default App;




