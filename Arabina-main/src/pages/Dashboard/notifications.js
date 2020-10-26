import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardBody, Media } from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

//Import Images
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";

class Notifications extends Component {
    render() {
        return (
            <React.Fragment>
                            <Col xl="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-8">Announcement</h4>
                                        <SimpleBar style={{ maxHeight: "390px" }}>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-light">
                                                        <Link to='/announcement'> <img src={img1} alt="" height="18"/></Link>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-14">
                                                            <Link to='/announcement'>
                                                            For the 13th Year Consecutively - Arab Bank & Tkiyet Um Ali Renew their Cooperation Agreement</Link></h5>
                                                        <p className="text-muted">Arab Bank announced the renewal of its strategic cooperation agreement with Tkiyet Um Ali (TUA) for the 13th ...</p>
    
                                                        <div className="float-right">
                                                            <p className="text-muted mb-0"><i className="fas fa-calendar-alt"></i> 12 Mar, 2020</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </li>
                                            <li className="list-group-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-light">
                                                        <Link to='/announcement-video'> <img src={img2} alt="" height="18"/></Link>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-14">
                                                            <Link to='/announcement-video'>Arab Bank Launches Special Offer for “Arabi Junior” Customers in Collaboration with “Shahid VIP”
                                                            </Link>
                                                            </h5>
                                                        <p className="text-muted">As part of Arab Bank’s series of exclusive offers to “Arabi Junior” customers, a banking program ...</p>

                                                        <div className="float-right">
                                                            <p className="text-muted mb-0"><i className="fas fa-calendar-alt"></i> 12 Mar, 2020</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </li>
                                            <li className="list-group-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-light">
                                                        <Link to='/announcement-video'> <img src={img3} alt="" height="18"/></Link>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-14">
                                                        <Link to='/announcement-video'>Arab Bank Launches its E-Voucher Service through “Arabi Mobile” App</Link></h5>
                                                        <p className="text-muted">Arab Bank has recently launched a new service through its “Arabi Mobile” App as part of its constant efforts ...</p>

                                                        <div className="float-right">
                                                            <p className="text-muted mb-0"><i className="fas fa-calendar-alt"></i> 12 Mar, 2020</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </li>
                                            <li className="list-group-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-light">
                                                            <img src={img1} alt="" height="18"/>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-14">Arab Bank Awarded “Best Mobile Banking App 2020” for Individual and Corporate Customers in Jordan</h5>
                                                        <p className="text-muted">Global Finance, the New York-based international publication, has recently granted Arab Bank the “Best Mobile Banking  ...</p>

                                                        <div className="float-right">
                                                            <p className="text-muted mb-0"><i className="fas fa-calendar-alt"></i> 12 Mar, 2020</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </li>
                                            <li className="list-group-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-light">
                                                            <img src={img1} alt="" height="18"/>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-14">Arab Bank Launches Special Offer in Collaboration with Booking.com</h5>
                                                        <p className="text-muted">Arab Bank has recently launched a special promotional offer in collaboration with Booking.com ...</p>

                                                        <div className="float-right">
                                                            <p className="text-muted mb-0"><i className="fas fa-calendar-alt"></i> 12 Mar, 2020</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </li>
                                            <li className="list-group-item">
                                                <Media>
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-light">
                                                            <img src={img1} alt="" height="18"/>
                                                        </span>
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-14">Arab Bank Group reports first half 2020 net profit of $152.1 million</h5>
                                                        <p className="text-muted">Arab Bank Group reported net income after tax of $ 152.1 million for the first half of 2020 ...</p>

                                                        <div className="float-right">
                                                            <p className="text-muted mb-0"><i className="fas fa-calendar-alt"></i> 12 Mar, 2020</p>
                                                        </div>
                                                    </Media>
                                                </Media>
                                            </li>
                                        </ul>
                                        </SimpleBar>
                                    </CardBody>
                                </Card>
                            </Col>
            </React.Fragment>
        );
    }
}

export default Notifications;