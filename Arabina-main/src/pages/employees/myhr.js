import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import myhr from "../../assets/images/myhr.PNG"

class MyHR extends Component {


    render() {   
       return (<React.Fragment>
           <Row>
                <Col className="col-12"><img src={myhr} alt="Logo" width="100%" height="100%" className="mt-5"/></Col>
           </Row>
           </React.Fragment>);
    }
}

export default MyHR;
