import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Input, Label, Button } from "reactstrap";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import {hospitals} from"./data.js"


class AddHospital extends Component {
    constructor() {
        super();
        this.state = {
            name:'',
            phone:'',
            address:''
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

     add = (e)=>{
        //alert(this.refs.name.value+"");
        hospitals.rows.push({
            name:this.state.name,
            phone:this.state.phone,
            address:this.state.address
        });
        this.setState({name:'',phone:'',address:''});
        console.log(hospitals);
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Medical-Network" breadcrumbItem="Add Hospital" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Add Hospital</CardTitle>
                                        <Form >
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Name</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="name" type="text" value={this.state.name} onChange={this.handelNameChange} className="form-control" placeholder=" Name..." />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Phone</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="phone" type="text" value={this.state.phone} onChange={this.handelPhoneChange} className="form-control" placeholder=" Phone..." />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Address</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="addess" type="text" value={this.state.address} onChange={this.handelAddessChange} className="form-control" placeholder=" Address..." />
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

export default AddHospital;
