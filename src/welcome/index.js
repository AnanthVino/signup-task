import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

export default class Welcome extends Component {

  renderView = () => {
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const role = localStorage.getItem("role");
    if( role === "admin" ){
      return (
        <div className="container d-flex flex-column content">
          <p>{`Welcome ${firstname} ${lastname}! You are the administrator. You can do all things.`}</p>
          <Link className="btn btn-info rounded-0" to="/" onClick={this.logout}>Logout</Link>
        </div>
      );
    } else if( role === "landlord" ){
      return (
        <div className="container d-flex flex-column content">
          <p>{`Welcome ${firstname} ${lastname}! You are the landlord. You can see your account.`}</p>
          <Link className="btn btn-info rounded-0" to="/" onClick={this.logout}>Logout</Link>
        </div>
      );
    } else {
      return (
        <div className="container d-flex flex-column content">
          <p>{`Access Denied. You are not logged in.`}</p>
          <Link className="btn btn-info rounded-0" to="/">Register</Link>
        </div>
      );
    }
  }

  logout = () => {
    localStorage.clear();
  }

  render(){
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark text-light bg-primary">
          <h3>Ajar Online</h3>
        </nav>
        { this.renderView() }
      </Fragment>
    );
  }
}