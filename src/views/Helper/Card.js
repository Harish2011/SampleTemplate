import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div id={this.props.id} className={"card card-default scrollspy"}>
                {this.props.children}
            </div>     
        )
    }
}
class CardBody extends Component {
    render() {
        return (
            <div id={this.props.id} className="card-content">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
class CardFooter extends Component {
    render() {
        return (
            <div className="footer">
                <div className={"card-action " + this.props.className ? this.props.className : ""}>                   
                    {this.props.children}                       
                </div>                   
            </div>
        )
    }
}
class CardHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="card-header">
                    { this.props.title ? <span className="card-title">{this.props.title}</span> : <div/> }
                    {this.props.children}                       
                </div>                   
            </div>
        )
    }
}
export{
    Card,
    CardBody,
    CardFooter,
    CardHeader
}