import React, { Component, useEffect } from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import MenuItem from '../Helper/Menu';
// const logo = require('../../assets/images/logo/Fr.png')
const logo = require('../../assets/images/logo/materialize-logo.png')

function Aside({ state, onMouseEnter, onMouseLeave, toggleSide }) {
    return (
        <aside className={state.expanded || state.hover ? "sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark sidenav-gradient sidenav-active-rounded" : "sidenav-main nav-collapsed nav-collapsible sidenav-dark gradient-45deg-deep-purple-blue sidenav-gradient sidenav-active-rounded"} onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="brand-sidebar">
                <h1 className="logo-wrapper"><a className="brand-logo darken-1" href="/"><img  src={logo} alt="materialize logo" /><span className="logo-text hide-on-med-and-down">eKYC</span></a><a className="navbar-toggler" href="#"><i className="material-icons" onClick={toggleSide}>{state.expanded ? "radio_button_checked" : "radio_button_unchecked"}</i></a></h1>
            </div>
            {/* <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow  scrollbar scrollbar-primary" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion"> */}
               <MenuItem />
            {/* </ul> */}
            <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
        </aside>

    );
}

export default Aside;
