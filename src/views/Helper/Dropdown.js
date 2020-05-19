import React, { Component } from 'react';


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            iconActive : false
        };
        this.isActive = this.isActive.bind(this);
      }
    isActive(id) {
        this.setState({
            active : document.getElementById(id).value === "" ? this.state.active ? false : true : true,
            iconActive : !this.state.iconActive
        })
    }
    render() {
        return (
            <div class="input-field col m4 s12">
                <div class="select-wrapper">
                    <input class="select-dropdown dropdown-trigger" type="text" readonly="true" data-target="select-options-c0d05937-0bdd-3034-f00f-a8e0394d0058" />
                        <ul id="select-options-c0d05937-0bdd-3034-f00f-a8e0394d0058" class="dropdown-content select-dropdown" tabindex="0" style={{}}>
                            <li class="disabled" id="select-options-c0d05937-0bdd-3034-f00f-a8e0394d00580" tabindex="0">
                                <span>Choose your profile</span>
                            </li>
                            <li id="select-options-c0d05937-0bdd-3034-f00f-a8e0394d00581" tabindex="0" class="selected">
                                <span>Manager</span>
                            </li>
                            <li id="select-options-c0d05937-0bdd-3034-f00f-a8e0394d00582" tabindex="0">
                                <span>Developer</span>
                            </li>
                            <li id="select-options-c0d05937-0bdd-3034-f00f-a8e0394d00583" tabindex="0">
                                <span>Business</span>
                            </li>
                        </ul>
                    <svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10l5 5 5-5z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                    <select tabindex="-1">
                        <option value="" disabled="" selected="">Choose your profile</option>
                        <option value="1">Manager</option>
                        <option value="2">Developer</option>
                        <option value="3">Business</option>
                    </select>
                </div>
                <label>Select Profile</label>
              </div>
        )
    }
}

export default Dropdown