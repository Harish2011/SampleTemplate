import React, {Component} from 'react';


class Card extends Component {
    render() {
        return(
            <div className={"card"+ this.props.className}>
            </div>
        )
    }
}

class CardTitle extends Component {
    render(){
        return (
            <h4 class="card-title">{this.props.title}</h4>
        )
    }
}
function CardContent() {
    return (
        <div class="card-content">
            <div class="row">
            <div class="input-field col s12">
                <input type="text" id="fn"/>
                <label for="fn">Name</label>
            </div>
            </div>
            <div class="row">
            <div class="input-field col s12">
                <input id="email" type="email"/>
                <label for="email">Email</label>
            </div>
            </div>
            <div class="row">
            <div class="input-field col s12">
                <input id="password" type="password"/>
                <label for="password">Password</label>
            </div>
            </div>
            <div class="row">
            <div class="input-field col s12">
                <textarea id="message" class="materialize-textarea"></textarea>
                <label for="message">Message</label>
            </div>
            <div class="row">
                <div class="input-field col s12">
                <button class="btn cyan waves-effect waves-light right" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
                </div>
            </div>
            </div>
        </div>
    )
}
module.exports = {
    Card, CardTitle
}