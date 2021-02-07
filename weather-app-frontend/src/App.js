import React from 'react'
import WeeklyForecastContainer from './containers/WeeklyForecastContainer'
import NotesListContainer from './containers/NotesListContainer'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  
 return(<>

    <Router>
      <Switch>
        <Route exact path={"/"} component={WeeklyForecastContainer} />
        <Route path="/about" component={About}/>
        <Route path="/notes" component={NotesListContainer}/>
           

      </Switch>
    </Router>
    </>
  
 );
 }


export default App;




