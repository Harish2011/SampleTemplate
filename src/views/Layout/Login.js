import React, {Component} from 'react';
import Authenticate from '../../Helper/Authenticate'
import {Input, Password} from '../Helper/TextBox';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            loading: false,
            error: '',
            formdata : {
                username: '',
                password: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        var that = this
        var token = "Hello"
        Authenticate.login(that, token)
    }
    render(){
        return (
            <div className="vertical-layout page-header-light vertical-menu-collapsible vertical-gradient-menu 1-column login-bg  blank-page blank-page" data-open="click" data-menu="vertical-gradient-menu" data-col="1-column">
                <div className="row">
                    <div className="col s12">
                        <div className="container"><div id="login-page" className="row">
                        <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                            <form className="login-form">
                            <div className="row">
                                <div className="input-field col s12">
                                <h5 className="ml-4">Sign in</h5>
                                </div>
                            </div>
                            <div className="row margin">
                                <Input id="username" col="s12" formdata={this.state.formdata} icon="person_outline" label="Name"/>
                            </div>
                            <div className="row margin">
                                <Password id="password" col="s12" formdata={this.state.formdata} icon="lock_outline" label="Password"/>
                            </div>
                            <div className="row">
                                <div className="col s12 m12 l12 ml-2 mt-1">
                                <p>
                                    <label>
                                        <input type="checkbox" />
                                    <span>Remember Me</span>
                                    </label>
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <button className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12" onClick={this.handleSubmit}>Login</button>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="input-field col s6 m6 l6">
                                <p className="margin medium-small"><a href="user-register.html">Register Now!</a></p>
                                </div>
                                <div className="input-field col s6 m6 l6">
                                <p className="margin right-align medium-small"><a href="user-forgot-password.html">Forgot password ?</a></p>
                                </div>
                            </div> */}
                            </form>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;