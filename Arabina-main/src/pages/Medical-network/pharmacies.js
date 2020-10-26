import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import "./datatables.scss";
import {pharmacies} from"./data.js"

class Pharmacies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Medical-Network" breadcrumbItem="Pharmacies" />

         

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

export default Pharmacies;
