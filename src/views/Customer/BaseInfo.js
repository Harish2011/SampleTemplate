import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '../Helper/Card'
import { Input, TextArea, File, Dropdown } from '../Helper/TextBox'
import Date  from '../Helper/Date'
import { Wizard, WizardStep } from '../Helper/Wizard';
import { SimpleTable } from '../Helper/Table';

class CustomerBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activestep: 1,
            columns: [
                { text: 'Employee ID', dataField: 'EmployeeID' },
                { text: 'First Name', dataField: 'FirstName' },
                { text: 'Last Name', dataField: 'LastName' },
                { text: 'Department', dataField: 'Department' },
                { text: 'Date of Birth', dataField: 'DateOfBirth' },
                { text: 'Gender', dataField: 'Gender' }
            ]
        }
        this.ChangeTab = this.ChangeTab.bind(this)
    }
    ChangeTab(id){
        this.setState({
            activestep : id
        })
    }
    render() {
        const source = [
            {
                "EmployeeID": "QUAL 001",
                "FirstName": "Karthik",
                "LastName": "Prakash",
                "Department": "Software",
                "DateOfBirth" : "02-02-2020",
                "Gender" : "Male"
            },
            {
                "EmployeeID": "QUAL 002",
                "FirstName": "Guru",
                "LastName": "Subramaniann",
                "Department": "Software",
                "DateOfBirth" : "02-02-2020",
                "Gender" : "Male"
            },
            {
                "EmployeeID": "QUAL 003",
                "FirstName": "Prem",
                "LastName": "Kumar",
                "Department": "Software",
                "DateOfBirth" : "02-02-2020",
                "Gender" : "Male"
            },
            {
                "EmployeeID": "QUAL 004",
                "FirstName": "Karthik",
                "LastName": "Guru",
                "Department": "Software",
                "DateOfBirth" : "02-02-2020",
                "Gender" : "Male"
            }
        ]
        return (
            <div className="row">
                <div className="col s12 m2 l12">
                    <Card>
                        <CardHeader title="Customer Details"></CardHeader>
                        <CardBody>
                            <Wizard wizardtype="horizontal">
                                <WizardStep use={this.ChangeTab}  title="Base Information" stepid="1" activestep={this.state.activestep}>
                                    <div className="row">
                                        <Input id="CustomerCode" col="s4" formdata={{}} icon="account_circle" label="Customer Code" />
                                        <Input id="CustomerName" col="s4" formdata={{}} icon="account_circle" label="Customer Name" />
                                        <Input id="Geography" col="s4" formdata={{}} icon="account_circle" label="Geography" />
                                        <Input id="Country" col="s4" formdata={{}} icon="account_circle" label="Country" />
                                        <Input id="State" col="s4" formdata={{}} icon="account_circle" label="State" />
                                        <Input id="City" col="s4" formdata={{}} icon="account_circle" label="City" />
                                        <TextArea id="Address" col="s4" formdata={{}} icon="account_circle" label="Address" />
                                        <Input id="ContactNumber" col="s4" formdata={{}} icon="contact_phone" label="Contact Number" />
                                        <Input id="EmailId" col="s4" formdata={{}} label="Email ID" />
                                    </div>
                                    <div className="row">
                                        <Input id="PinCode" col="s4" formdata={{}} icon="fiber_pin" label="Pin Code" />
                                        <Dropdown title="Dropdown" col="s4" id="test" formdata={{}} icon="contact_phone" source={[{Value : 1, Text : "Test1"}, {Value : 2, Text : "Test2"}]}/>
                                        <Date formdata={{}}/>
                                    </div>
                                    <CardFooter>
                                        <div className="align-right">
                                            <button class="btn btn-reset" type="button">
                                                <i class="material-icons left">clear</i>Reset
                                                </button>
                                            <button class="btn previous-step" type="button" disabled>
                                                <i class="material-icons left">arrow_back</i>
                                                    Prev
                                                </button>
                                            <button class="waves-effect waves dark btn btn-primary next-step"
                                                type="button">
                                                Next
                                                    <i class="material-icons right">arrow_forward</i>
                                            </button>
                                        </div>
                                    </CardFooter>
                                </WizardStep>
                                <WizardStep use={this.ChangeTab} title="Branch" stepid="2" activestep={this.state.activestep}>
                                    <div className="col s12 m12 l12">
                                        <SimpleTable/>
                                    </div>
                                </WizardStep>
                            </Wizard>
                        </CardBody>
                        
                    </Card>
                </div>
            </div>

        )
    }
}

export default CustomerBase;