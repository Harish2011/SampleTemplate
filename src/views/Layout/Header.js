import React, { Component, useEffect } from 'react';
import { Redirect, Route, Switch, Router, Link } from 'react-router-dom';
import Authenticate from '../../Helper/Authenticate'

const user = require('../../assets/images/user/9.jpg')

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false
    }
    this.logout = this.logout.bind(this)
  }
  logout (e){
    Authenticate.logout(this)
  }
  render() {
    return (
      <header className="page-topbar" id="header" >
          <div className="navbar navbar-fixed">
            <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-light">
              <div className="nav-wrapper">
                <div className={this.props.state.expanded || this.props.state.hover ? "header-search-wrapper hide-on-med-and-down" : "header-search-wrapper nav-collapsed hide-on-med-and-down"}><i className="material-icons">search</i>
                  <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore FaceR" />
                </div>
                <ul className="navbar-list right">
                  <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light translation-button" href="javascript:void(0)" data-target="translation-dropdown"><span className="flag-icon flag-icon-gb"></span></a></li>
                  <li><a className="waves-effect waves-block waves-light profile-button"  data-target="profile-dropdown" onClick={this.props.dropProfileOption} ><span className="avatar-status avatar-online"><img src={user} alt="avatar" /><i></i></span></a></li>
                </ul>
                <ul className={this.props.state.dropProfile ? "dropdown-content profileDrop" : "dropdown-content"} id="profile-dropdown">
                  <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i className="grey-text material-icons">person_outline</i> Profile</a></li>
                  <li className="divider"></li>
                  <li><a className="grey-text text-darken-1" href="user-lock-screen.html"><i className="grey-text material-icons">lock_outline</i> Lock</a></li>
                  <li onClick={this.logout}>
                    <a className="grey-text text-darken-1" href="/login">
                      <i className="grey-text material-icons">keyboard_tab</i> Logout
                    </a>
                  </li>
                </ul>
              </div>
              <nav className="display-none search-sm">
                <div className="nav-wrapper">
                  <form>
                    <div className="input-field">
                      <input className="search-box-sm" type="search" required="" />
                      <label className="label-icon" htmlFor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                    </div>
                  </form>
                </div>
              </nav>
            </nav>
          </div>
        </header>
    )
  }
}
export default Header;
