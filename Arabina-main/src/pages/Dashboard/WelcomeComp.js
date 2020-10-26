import React, { Component } from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import avatar1 from "../../assets/images/aaa.jpg";
import profileImg from "../../assets/images/profile-img.png";

class WelcomeComp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Card className="overflow-hidden">
                    <div className="bg-soft-primary">
                        <Row>
                            <Col xs="7">
                                <div className="text-primary p-3">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p>Dashboard</p>
                                </div>
                            </Col>
                            <Col xs="5" className="align-self-end">
                                <img src={profileImg} alt="" className="img-fluid" />
                            </Col>
                        </Row>
                    </div>
                    <CardBody className="pt-0">
                        <Row>
                            <Col sm="12">
                                <div className="avatar-md profile-user-wid mb-4">
                                    <img src={avatar1} alt="" className="img-thumbnail rounded-circle" />
                                </div>
                                <h1 className="font-size-20 text-truncate">Yousef Alnajjar</h1>
                                <p className="text-muted mb-0 text-truncate">Developer</p>
                            </Col>

                            <Col sm="8">
                                <div className="pt-4">
                                    <h6 className="font-size-12 text-truncate">25/OCT/2020 12:34PM</h6>
                                     <p className="text-muted mb-0 text-truncate">Amman 33 °C</p>
                                    <Row>
                                        <div className="mt-4">
                                            <Link to="/profile" className="btn btn-primary waves-effect waves-light btn-sm">View Profile <i className="mdi mdi-arrow-right ml-1"></i></Link>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default WelcomeComp;
