import React, { Component } from 'react';
import Slidewithindicator from "../Ui/CarouselTypes/slidewithindicator";
import UiVideo from "../Ui/UiVideo"
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, Media, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Image
import img1 from "../../assets/images/companies/img-1.png";
import avatar1 from "../../assets/images/aaa.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
class AnnouncementVideo extends Component {


    render() {   
       return (
       <React.Fragment>
           <div className="page-content">
            <div className="col-md-12 row">
                    <Col className="col-md-6 mt-3">
                        <h1>Arabi Junior and Shahid VIP</h1>
                        <p>  As part of Arab Bank’s series of exclusive offers to “Arabi Junior” customers, a banking program for children and teens up to the age of 17 years, the bank has recently launched a special promotional offer in collaboration with “Shahid VIP”, a subscription video on demand platform by the MBC Group. </p>  
                    </Col>
                    <Col className="col-md-6 text-center">
                     
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-body">
                                            <iframe title="tes2" className="embed-responsive-item" src="https://www.youtube.com/embed/P4An6ifJOXk" width="100%" height="300px"></iframe>
                                        </div>
                                    </div>
                                </div> 
                      
                    </Col>
            </div>
            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Comments</CardTitle>

                                        <Media className="mb-4">
                                            <div className="mr-3">
                                                <img className="media-object rounded-circle avatar-xs" alt="" src={avatar2} />
                                            </div>
                                            <Media body>
                                                <h5 className="font-size-13 mb-1">David Lambert</h5>
                                                <p className="text-muted mb-1">
                                                    Separate existence is a myth.
                                                </p>
                                            </Media>
                                            <div className="ml-3">
                                                <Link to="#" className="text-primary">Reply</Link>
                                            </div>
                                        </Media>

                                        <Media className="mb-4">
                                            <div className="mr-3">
                                                <img className="media-object rounded-circle avatar-xs" alt="" src={avatar3} />
                                            </div>
                                            <Media body>
                                                <h5 className="font-size-13 mb-1">Steve Foster</h5>
                                                <p className="text-muted mb-1">
                                                    <Link to="" className="text-success">@Henry</Link>
                                                    To an English person it will like simplified
                                                </p>
                                                <Media className="mt-3">
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                            J
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-13 mb-1">Jeffrey Walker</h5>
                                                        <p className="text-muted mb-1">
                                                            as a skeptical Cambridge friend
                                                        </p>
                                                    </Media>
                                                    <div className="ml-3">
                                                        <Link to="" className="text-primary">Reply</Link>
                                                    </div>
                                                </Media>
                                            </Media>
                                            <div className="ml-3">
                                                <Link to="" className="text-primary">Reply</Link>
                                            </div>
                                        </Media>

                                        <Media className="mb-4">
                                            <div className="avatar-xs mr-3">
                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                                                    S
                                                </span>
                                            </div>
                                            <Media body>
                                                <h5 className="font-size-13 mb-1">Steven Carlson</h5>
                                                <p className="text-muted mb-1">
                                                    Separate existence is a myth.
                                                </p>
                                            </Media>
                                            <div className="ml-3">
                                                <Link to="" className="text-primary">Reply</Link>
                                            </div>
                                        </Media>

                                        <div className="text-center mt-4 pt-2">
                                            <Link to="#" className="btn btn-primary btn-sm">View more</Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>  
           </div>
        </React.Fragment>);
    }
}

export default AnnouncementVideo;
