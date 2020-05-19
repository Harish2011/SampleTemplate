import React, { Component } from 'react';


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {
        return (
            <ul className={"stepper " + (this.props.wizardtype ? this.props.wizardtype : "horizontal")}>
                {this.props.children}
            </ul>
        )
    }
}
class WizardStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            iconActive : false
        };
      }
    render() {
        return (
            <li onClick={()=>this.props.use(this.props.stepid)} class={"step " + (this.props.stepid.toString() === this.props.activestep.toString() ? " active" : "")}>
                <div class="step-title waves-effect">{this.props.title}</div>
                <div class="step-content">
                    {this.props.children}
                </div>
            </li>
        )
    }
}
class WizardFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            iconActive : false
        };
        // this.onFocus = this.onFocus.bind(this);
      }
    
    render() {
        return (
            <div class="step-actions">
                <div class="row">
                    <div class="col m4 s12 mb-3">
                        <button class="red btn btn-reset" type="reset">
                            <i class="material-icons left">clear</i>Reset
                        </button>
                    </div>
                    <div class="col m4 s12 mb-3">
                        <button class="btn btn-light previous-step" disabled>
                            <i class="material-icons left">arrow_back</i>
                            Prev
                        </button>
                    </div>
                    <div class="col m4 s12 mb-3">
                        <button class="waves-effect waves dark btn btn-primary next-step"
                            type="submit">
                            Next
                            <i class="material-icons right">arrow_forward</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export {
    Wizard, 
    WizardStep,
    WizardFooter
}