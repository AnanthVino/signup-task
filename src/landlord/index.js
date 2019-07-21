import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../home';
import StepOne from './stepone';
import StepTwo from './steptwo';

export default class LandLord extends Component {
  render(){
    return (
      <div className="App">
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark text-light bg-primary">
            <h3>Ajar Online</h3>
          </nav>
        </Fragment>
        <div className="d-flex justify-content-center">
          <div className="d-flex form-box">
            <div className="form-header text-light bg-primary text-center">
              <h5>Signup as a landlord</h5>
            </div>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/landlord" exact component={StepOne} />
              <Route path="/landlord/stepone" exact component={StepOne} />
              <Route path="/landlord/steptwo" exact component={StepTwo} />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}