import React from 'react';
import Footer from './views/test';
import Home from './views/Layout/Landing'
import Login from './views/Layout/Login'
import CustomerBase from './views/Customer/BaseInfo'


const routes = [
  { path: '/', exact:true, name: 'Home', component : Footer },
  { path: '/login', exact:true, name: 'Home', component : Login },
  { path: '/CustomerProfile', exact:true, name: 'Customer', component : CustomerBase },
];

export default routes;
