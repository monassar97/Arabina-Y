import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import Select from "react-select";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import {doctors} from './data';

const optionGroup = [
	{
		label: "City",
		options: [
			{ label: "Amman", value: "Amman" },
			{ label: "Zarqa", value: "Zarqa" },
			{ label: "Irbid", value: "Irbid" },
            { label: "Jerash", value: "Jerash" },
			{ label: "Ma'an", value: "Ma'an" }
            
		]
	}
];


class AddDoctor extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            phone:'',
            address:'',
            regions:'',
            specialization:'',
            city:''
        }
    }

    handelNameChange = (e)=>{
        this.setState({name:e.target.value})
    }

    handelPhoneChange = (e)=>{
        this.setState({phone:e.target.value})
    }

    handelAddessChange = (e)=>{
        this.setState({address:e.target.value})
    }

    handelRegionsChange = (e)=>{
        this.setState({regions:e.target.value})
    }

    handelSpecializationChange = (e)=>{
        this.setState({specialization:e.target.value})
    }

    handleCitytGroup  = (e)=>{
        this.setState({city:e.target.value});
    }

    handleSelectGroup = selectedGroup => {
		this.setState({ selectedGroup });
	};

     add = (e)=>{
        //alert(this.refs.name.value+"");
        doctors.rows.push({
            name:this.state.name,
            phone:this.state.phone,
            address:this.state.address,
            regions:this.state.regions,
            specialization:this.state.specialization,
            city:this.selectedGroup
        });
        this.setState({name:'',phone:'',address:'',selectedGroup:'',city:'',specialization:'',regions:''});
       this.setState({ success_msg: true })
        console.log(doctors);
    }

    render() {   
        const { selectedGroup } = this.state;
     
        return (
            <React.Fragment>
            {this.state.success_msg ? (
											<SweetAlert
												title="Good job!"
												success
												showCancel
												confirmBtnBsStyle="success"
												cancelBtnBsStyle="danger"
												onConfirm={() => this.setState({ success_msg: false })}
												onCancel={() => this.setState({ success_msg: false })}
											>
												Doctor Added!
											</SweetAlert>
										) : null}
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Medical-Network" breadcrumbItem="Add Doctor" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Add Doctor</CardTitle>
                                        <Form >
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Name</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="name" type="text" value={this.state.name} onChange={this.handelNameChange} className="form-control" placeholder=" Name..." />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Specialization</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="specialization" type="text" value={this.state.specialization} onChange={this.handelSpecializationChange} className="form-control" placeholder=" Specialization..." />
                                                </Col>
                                            </FormGroup>


                                               <FormGroup className="select2-container" className="mb-4" row>
														<Label htmlFor="projectname" className="col-form-label col-lg-2">City</Label>
                                                        <Col lg="10">
														<Select
															value={selectedGroup}
															onChange={this.handleSelectGroup}
                                                            options={optionGroup}
															classNamePrefix="select2-selection"
														/>
                                                        </Col>

													</FormGroup>
                                            
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Regions</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="regions" type="text" value={this.state.regions} onChange={this.handelRegionsChange} className="form-control" placeholder=" Regions..." />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Address</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="addess" type="text" value={this.state.address} onChange={this.handelAddessChange} className="form-control" placeholder=" Address..." />
                                                </Col>
                                            </FormGroup>
                                           

                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Phone</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="phone" type="text" value={this.state.phone} onChange={this.handelPhoneChange} className="form-control" placeholder=" Phone..." />
                                                </Col>
                                            </FormGroup>

                                            
                                            {/* TODO: Dropdown to select type 
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Project Name</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="projectname" type="text" value={this.state.name} onChange={this.handelChange} className="form-control" placeholder="Enter Project Name..." />
                                                </Col>
                                            </FormGroup> */}
                                            
                                          
                                        </Form>
                                      
                                        <Row className="justify-content-end">
                                            <Col lg="10">
                                                <Button type="submit" color="primary" onClick={this.add}>Add</Button>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default AddDoctor;
