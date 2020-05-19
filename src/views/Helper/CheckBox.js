import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        return (
            <label>
                 {this.props.checked ?
                        <input type="checkbox" checked
                                disabled = {this.props.disabled ? "disabled" : ""}
                                className = {this.props.filled ? "filled-in" : "" }
                                name = {this.props.name}/>
                                    :
                        <input type="checkbox" 
                                disabled = {this.props.disabled ? "disabled" : ""}
                                className = {this.props.filled ? "filled-in" : "" }
                                name = {this.props.name} />
                 }
                <span>{this.props.label}</span>
            </label>
        )
    }
}
export{
    CheckBox
}