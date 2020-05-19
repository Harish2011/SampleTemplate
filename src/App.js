import React, { Component } from 'react';
import { Redirect, Route, Switch, HashRouter, BrowserRouter, Router, Link } from 'react-router-dom';
import './App.css';
import './assets/css/style.css'
import Authenticate from './Helper/Authenticate'
import Login from './views/Layout/Login';
import Home from './views/Layout/Landing';
import PageNotFound from './views/Layout/PageNotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/login" name="Login" component={Login} />
            <Authenticate.PrivateRoute path="/" name="Home" component={Home} />
            {/* <Route name="Not Found" component={PageNotFound} /> */}
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
