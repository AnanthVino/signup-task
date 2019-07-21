import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './home';
import Admin from './admin';
import Landlord from './landlord';
import Welcome from './welcome';
import './App.css';

const App = () => {
  useEffect(() => {
    // detect if localstorage saved page position.
    const lastPage = localStorage.getItem("page");
    if (lastPage && window.location.pathname !== lastPage) {
      window.location.href=lastPage;
    }
  });
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/landlord" component={Landlord} />
      <Route path="/welcome" component={Welcome} />
    </Router>
  );
}

export default App;
