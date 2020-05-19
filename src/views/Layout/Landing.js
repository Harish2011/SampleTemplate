import React, { Component } from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router, HashRouter, Link } from 'react-router-dom'; 
import routes from '../../Routes'
import Header from './Header';
import Aside from './Aside';
import PageNotFound from './PageNotFound'


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          expanded : true,
          hover : false,
          dropProfile : false
      };
      this.toggleSide = this.toggleSide.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.dropProfileOption = this.dropProfileOption.bind(this);
    }
    toggleSide() {
      this.setState({
        expanded : !this.state.expanded
      })
    }
    onMouseEnter() {
      if (!this.state.expanded){
        this.setState({
          hover : true
        })
      }
    }
    onMouseLeave() {
      if (!this.state.expanded){
        this.setState({
          hover : false
        })
      }
    }
    dropProfileOption(){
      this.setState({
        dropProfile : !this.state.dropProfile
      })
    }
    render() {
      return (
        <Router>
          <Header state={this.state} dropProfileOption = {this.dropProfileOption} />
          <Aside state={this.state} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} toggleSide={this.toggleSide} />
          <div id="main" className={this.state.expanded ? "main-full" : ""}>
            <div className="row">
              <div className="col s12">
                <div className="container">
                  <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      })}
                      <Route
                         render={props => (
                          <PageNotFound {...props} />
                        )}
                      />
                    </Switch>
                </div>
              </div>
            </div>
          {/* <footer class="page-footer footer footer-static footer-light navbar-border navbar-shadow">
            <div class="footer-copyright">
              <div class="container"><span>&copy; 2020<a href="http://energica.io" target="_blank">Energica</a> All rights reserved.</span><span class="right hide-on-small-only">a <a href="http://energica.io/">a</a></span></div>
            </div>
          </footer> */}
          </div>
        </Router>
      );
    }
}
 
export default Home;