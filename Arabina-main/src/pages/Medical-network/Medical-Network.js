import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import "./datatables.scss";
import {hospitals,doctors,pharmacies} from"./data.js"

class MedicalNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Tables" breadcrumbItem="Medical-Network" />

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <CardTitle>Hospitals </CardTitle>
                   

                    <MDBDataTable responsive bordered data={hospitals} />


                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <CardTitle>Doctors </CardTitle>
                    

                    <MDBDataTable responsive striped bordered data={doctors} />

                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <CardTitle>Pharmacies </CardTitle>
                    

                    <MDBDataTable responsive striped bordered data={pharmacies} />

                  </CardBody>
                </Card>
              </Col>
            </Row>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MedicalNetwork;
