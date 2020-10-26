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

import {offers} from './data';

class AddOffer extends Component {
    constructor() {
        super();
        this.state = {
           id: "",
           img: "Null",
           name: "",
           designation: "",
           color: "primary",
           skills: [
                { name: "" }
            ]
        }
    }

    handelNameChange = (e)=>{
        this.setState({name:e.target.value})
    }

    handelDesignationChange = (e)=>{
        this.setState({designation:e.target.value})
    }

 

     add = (e)=>{
        //alert(this.refs.name.value+"");
        offers.push(this.state);
        this.setState({name:'',designation:''});
       this.setState({ success_msg: true })
        console.log(offers);
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
												Offer Added!
											</SweetAlert>
										) : null}
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Medical-Network" breadcrumbItem="Add Offer" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Add Offer</CardTitle>
                                        <Form >
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Name</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="name" type="text" value={this.state.name} onChange={this.handelNameChange} className="form-control" placeholder=" Title..." />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Designation</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="designation" type="text" value={this.state.designation} onChange={this.handelDesignationChange} className="form-control" placeholder=" Sub-title..." />
                                                </Col>
                                            </FormGroup>

                                            {/* <FormGroup className="mb-4" row>
                                                <Label htmlFor="projectname" className="col-form-label col-lg-2">Tag</Label>
                                                <Col lg="10">
                                                    <Input id="projectname" name="tag" type="text" value={this.state.skills[0].name} onChange={this.handelTageChange} className="form-control" placeholder=" Tag..." />
                                                </Col>
                                            </FormGroup>
 */}
                                            
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

export default AddOffer;
