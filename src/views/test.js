import React, { Component } from 'react';
import {Radio} from './Helper/Radio';
import {CheckBox} from './Helper/CheckBox';
import {Switch} from './Helper/Switch';
import {Card, CardBody, CardFooter, CardHeader} from './Helper/Card';
import {Input, File, Dropdown} from './Helper/TextBox';
import Webcam from "react-webcam";
import ReactPlayer from 'react-player'


class Footer extends Component {

  constructor(props){
    super(props);

    this.state = {
      webcamEnabled: false,
      tabactive : 1,
      openmodal : 0,
    }

  }
  render(){
    return (
      <div className="row">         
        
      </div>
    );
  }
}
 
export default Footer;