import React, { Component } from 'react';

class Switch extends Component {
    constructor(props) {
        super(props);       
    }   
    

    render() {
        return (
            <div class="switch">
                <label>
                {this.props.labeloff}
                <input type="checkbox" //checked = {this.props.checked ? "checked" : ""}
                                     disabled = {this.props.disabled ? "disabled" : ""}
                                     name = {this.props.name} />
                  <span class="lever"></span>
                 {this.props.labelOn}
                </label>
            </div>           
        )
    }
}
export{
    Switch
}