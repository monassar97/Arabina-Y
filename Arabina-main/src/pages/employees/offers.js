import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Card
import CardContact from "./card-contact";

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import {offers} from "./data"
class OffersGrid extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Employees" breadcrumbItem="Offers" />

                        <Row>
                            {
                                offers.map((user, key) =>
                                    <CardContact user={user} key={"_user_" + key} />
                                )
                            }

                        </Row>

                        <Row>
                            <Col xs="12">
                                <div className="text-center my-3">
                                    <Link to="#" className="text-success"><i className="bx bx-hourglass bx-spin mr-2"></i> Load more </Link>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default OffersGrid;