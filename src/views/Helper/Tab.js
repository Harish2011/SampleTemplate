import React, { Component } from 'react';


class Tab extends Component {
    constructor(props) {
        super(props);       
    }   
    

    render() {
        return (
            <div id={this.props.id} class="card">
                {this.props.children}
            </div>     
        )
    }
}
export{
    Tab
}