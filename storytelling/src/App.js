import React, { Component } from "react";
import Login from "./components/Login";
import Signup from './components/Signup';
import "./App.css";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (

         <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            </React.Fragment>


  )}
}

export default App;
