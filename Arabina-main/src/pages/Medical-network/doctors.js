import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle ,Input,Button} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import "./datatables.scss";
import {doctors} from"./data.js"

class Doctors extends Component {
  constructor(props) {
    super(props);
    this.state = {search:'',flag:0};
  }
  handelSearchChange = (e)=>{
    this.setState({search:e.target.value});
  }

  search=(e)=>{
    this.setState({flag:'1'});
  }


  render() {

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">

            <Breadcrumbs title="Medical-Network" breadcrumbItem="Doctors" />
{/* 
          { this.state.flag == 0 &&
           <Row>
                <Col className="col-3"></Col>
                <Col className="col-6">
                  <Input id="search" name="search" type="text" value={this.state.search} onChange={this.handelSearchChange} className="form-control" placeholder=" Keyword , name , city , specialization ..." />
                </Col>
                <Col className="col-3"> 
                  <Button type="submit" color="primary" onClick={this.search}>Search</Button>
                </Col>
           </Row>
          } */}


          {/* { this.state.flag == 1 &&      */}
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
            {/* } */}

          
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Doctors;
