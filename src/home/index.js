import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends Component {
  render(){
    return (
      <div className="App">
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark text-light bg-primary">
            <h3>Ajar Online</h3>
          </nav>
        </Fragment>
        <div className="d-flex justify-content-center">
          <div className="d-flex home-box">
            <div className="form-header text-light bg-primary text-center">
              <h5>Sign Up</h5>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center flex-grow-1">
              <Link className="btn btn-info rounded-0" to="/landlord">As Landlord</Link>
              <Link className="btn btn-info rounded-0" to="/admin">As Admin</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}