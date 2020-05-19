import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            iconActive : false
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
      }
    onFocus(id) {
        this.setState({
            active : true,
            iconActive : true
        })
    }
    onBlur(id) {
        this.setState({
            active : document.getElementById(id).value === "" ?  false : true,
            iconActive : false
        })
    }
    onTodoChange(e) {
        this.props.formdata[e.target.id] = e.target.value
        this.setState({
            active : true
        })
    }
    render() {
        return (
            <div className={"input-field col " + this.props.col}>
                { this.props.icon ? (<i className={this.state.iconActive ? "material-icons prefix active" : "material-icons prefix"}>{this.props.icon}</i>) : null }
                <input onFocus={()=>this.onFocus(this.props.id)} onBlur={()=>this.onBlur(this.props.id)} onChange={this.onTodoChange} type="text" id={this.props.id} value={this.props.formdata[this.props.id]}></input>
                <label htmlFor={this.props.id} className={this.state.active ? "active" : ""}>{this.props.label}</label>
            </div>
        )
    }
}
class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            iconActive : false
        };
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
      }
    onFocus(id) {
        this.setState({
            active : true,
            iconActive : true
        })
    }
    onBlur(id) {
        this.setState({
            active : document.getElementById(id).value === "" ?  false : true,
            iconActive : false
        })
    }
    onTodoChange(e) {
        this.props.formdata[e.target.id] = e.target.value
        this.setState({
            active : true
        })
    }
    render() {
        return (
            <div className={"input-field col " + this.props.col}>
                { this.props.icon ? (<i className={this.state.iconActive ? "material-icons prefix active" : "material-icons prefix"}>{this.props.icon}</i>) : null }
                <input onFocus={()=>this.onFocus(this.props.id)} onBlur={()=>this.onBlur(this.props.id)} onChange={this.onTodoChange} type="password" id={this.props.id} value={this.props.formdata[this.props.id]}></input>
                <label htmlFor={this.props.id} className={this.state.active ? "active" : ""}>{this.props.label}</label>
            </div>
        )
    }
}
class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false,
            iconActive : false
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
      }
    onFocus(id) {
        this.setState({
            active : true,
            iconActive : true
        })
    }
    onBlur(id) {
        this.setState({
            active : document.getElementById(id).value === "" ?  false : true,
            iconActive : false
        })
    }
    onTodoChange(e) {
        this.props.formdata[e.target.id] = e.target.value
        this.setState({
            active : true
        })
    }
    render() {
        return (
                
            <div className={"input-field col " + this.props.col}>
                { this.props.icon ? (<i className={this.state.iconActive ? "material-icons prefix active" : "material-icons prefix"}>{this.props.icon}</i>) : null }
                <textarea onFocus={()=>this.onFocus(this.props.id)} onBlur={()=>this.onBlur(this.props.id)} onChange={e => this.onTodoChange} id={this.props.id} className="materialize-textarea" value={this.props.formdata[this.props.id]}></textarea>
                <label htmlFor={this.props.id} className={this.state.active ? "active" : ""}>{this.props.label}</label>
            </div>
        )
    }
}
class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            Value : this.props.selected ?  this.props.selected : "",
            // Text : this.props.selected ?  this.props.source.find(s =>s.Value.toString() == this.props.selected).Text : "",
            Source : this.props.source ? this.props.source : []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.props.formdata[e.target.id] = e.target.value
        // this.setState({
        //     Value : e.target.value  
        // })
    };
    
    render(){
        return(
            <div className={"input-field col " + this.props.col}>
            { this.props.icon ? (<i className={this.state.iconActive ? "material-icons prefix active" : "material-icons prefix"}>{this.props.icon}</i>) : null }
            <FormControl className={this.props.icon ? "icon-pad" : ""} style={{width : "100%"}}>
                <InputLabel className={this.props.icon ? "icon-label-pad" : ""} id="demo-simple-select-label">{this.props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id={this.props.id + "drop"}
                    value={this.state.Value}
                    onChange={this.handleChange}
                >
                    <MenuItem value="">
                        <em>Please Select</em>
                    </MenuItem>
                {
                    this.state.Source.map((item, idx) => {
                        return (
                            <MenuItem key={idx} value={item.Value}>{item.Text}</MenuItem>
                        )
                    })
                }
                </Select>
                <input type="hidden" value={this.state.Value} id={this.props.id}/>
            </FormControl>
        </div>
        )
    }
}
class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ClientFileName : "Drop or Click to Upload",
            File : null,
            UploadededFileName : ""
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
      }
      onChangeHandler=event=>{
        this.setState({
            ClientFileName : event.target.files[0].name,
            File : event.target.files[0]
        })
    };
    render() {
        const height = this.props.height ? this.props.height : "50px"
        return (
            <div className={"dropzone col " + (this.props.col ? this.props.col : "s4")} >
                <input id={this.props.id} style={{height : height, padding : height + " 0 0 0"}} onChange={this.onChangeHandler} type="file"></input>
                <span style={{color : "#64b5f6"}}>{this.state.ClientFileName}</span>
                <div class="progress">
                    <div class="determinate" style={{width: "65%"}}></div>
                </div>
            </div>
        )
    }
}

function Date() {
    const [selectedDate, setSelectedDate] = new Date('2014-08-18T21:11:54');
    const handleDateChange = (e) => {
        debugger
    }
    return(
        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
            <Grid container justify="space-around">
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{'aria-label': 'change date'}}
            />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}


export {
    Input,
    Password,
    Dropdown,
    TextArea,
    File,
    Date
}