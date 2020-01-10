import React, { Component } from 'react';
import{Route,Switch} from "react-router-dom";
import Navigation from './components/navigation/navigation';

import Home from "./components/home/home.jsx";
import Login from "./components/login/login.jsx";
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navigation/>
        <div className="container">
          <Switch>
            <Route path="/" exact component ={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}
export default App;
