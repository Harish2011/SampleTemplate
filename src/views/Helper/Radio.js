import React, { Component } from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);         
    } 
    render() {
        return (
            <label>
                {this.props.checked ? <input type="radio"  checked
                                    disabled = {this.props.disabled ? "disabled" : ""}
                                    className = {this.props.nogap ? "" : "with-gap" }
                                    name = {this.props.name} />
                :
                <input type="radio" 
                                    disabled = {this.props.disabled ? "disabled" : ""}
                                    className = {this.props.nogap ? "" : "with-gap" }
                                    name = {this.props.name} />
                }
                <span>{this.props.label}</span>
            </label>
        )
    }
}
export{
    Radio
}