import React, { Component, useEffect } from 'react';
import { Redirect, Route, Switch, Router, Link } from 'react-router-dom';
import navigation from '../../_nav'

function Parent({ id, name, icon, children, isOpen, state }) {
    return (
        <li key={id} className={state.isOpen === id ? "active open bold" : "bold"}>
            <span onClick={() => isOpen(id)} className="collapsible-header waves-effect waves-cyan ">
                <i className="material-icons">{icon}</i>
                <span className="menu-title" data-i18n="">{name}</span>
            </span>
            <div className={state.isOpen === id ? "display-block collapsible-body" : " collapsible-body"} >
                <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                    {children.map((child, ids) => {
                        return (
                            <li className="bold" key={ids}>
                                <a className="waves-effect waves-cyan" href={child.url}>
                                    <i className="material-icons">{child.icon}</i>
                                    <span className="menu-title" data-i18n="">{child.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </li>
    )
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            currentPath : '/'
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(key) {
        this.setState({
            isOpen: key === this.state.isOpen ? false : key
        })
    }
    changeActive(url){
        this.setState({
            currentPath: url
        })
    }
    render() {
        return (
            <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow  scrollbar scrollbar-primary" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
                {navigation.items.map((nav, idx) => {
                    return nav.title ?
                        <li key={idx} className="navigation-header"><span className="navigation-header-text">{nav.name}</span>
                        </li>

                        : nav.isParent ?
                            <Parent id={idx} name={nav.name} icon={nav.icon} children={nav.children} isOpen={this.toggle} state={this.state}>
                                {this.props.children}
                            </Parent>
                        :
                        <li key={idx} onClick={()=>this.changeActive(nav.url)} className={this.state.currentPath === nav.url ? "active open bold" : "bold"}>
                            <Link className={this.state.currentPath === nav.url ? "waves-effect waves-cyan active" : "waves-effect waves-cyan"} to={nav.url}>
                                <i className="material-icons">{nav.icon}</i>
                                <span className="menu-title" data-i18n="">{nav.name}</span>
                            </Link>
                        </li>
                })}
            </ul>
        )
    }
}
export default MenuItem;
