import React from 'react';
import { Route, Redirect, Router, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Login from '../views/Layout/Login'
const jwt = require('jsonwebtoken');
const cookies = new Cookies();

export const Authenticate = {
    PrivateRoute,
    login,
    logout
}
function PrivateRoute({ component: Component, ...rest }) {
    var token = cookies.get('jwt-token'); // jwt.decode(cookies.get('jwt-token'));
    return (
        <Route {...rest} render={props => (
            token ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    )
}
function logout(that) {
    cookies.set("jwt-token", "")
}

function login(that, token) {
    if (true) {
        cookies.set("jwt-token", token);
        that.props.history.push("/")
    }
    else {
        that.setState({error : "Invalid Username or Password"})
    }
}

export default Authenticate;