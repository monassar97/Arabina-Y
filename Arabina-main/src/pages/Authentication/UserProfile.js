import React, { Component } from 'react';
import { Container, Row, Col, Card,Alert, CardBody,Media, Button } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumb from '../../components/Common/Breadcrumb';

import avatar from '../../assets/images/aaa.jpg';
// actions
import { editProfile } from '../../store/actions';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {email : "", name : "Yousef", idx : 1 }

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.props.editProfile(values);
    }

    componentDidMount()
    {
        if(localStorage.getItem("authUser"))
           {
             const obj = JSON.parse(localStorage.getItem("authUser"));
             if(process.env.REACT_APP_DEFAULTAUTH === 'firebase')
             { 
                this.setState({name :'Yousef',email :obj.email,idx : obj.uid  });
             }
              else if((process.env.REACT_APP_DEFAULTAUTH === 'fake') || (process.env.REACT_APP_DEFAULTAUTH === 'jwt'))
             {
                this.setState({name :'Yousef' ,email:obj.email,idx : obj.uid  });
             }               
           }
    }
    componentDidUpdate(prevProps, prevState)
    {
        if(this.props !== prevProps)
        {
            const obj = JSON.parse(localStorage.getItem("authUser"));
             if(process.env.REACT_APP_DEFAULTAUTH === 'firebase')
             { 
                this.setState({name :'Yousef',email :obj.email,idx : obj.uid  });
             }
              else if((process.env.REACT_APP_DEFAULTAUTH === 'fake') || (process.env.REACT_APP_DEFAULTAUTH === 'jwt'))
             {
                this.setState({name :'Yousef',email :obj.email,idx : obj.uid  });
             }         
        }
    }

    render() {
        this.props.editProfile("Yousef");
        return (
           <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumb title="Employee" breadcrumbItem="Profile" />

                        <div className="card mb-3 mt-5" >
  <div className="row no-gutters">
    <div className="col-md-4 my-auto">
      <img src={avatar} width="100%" height="auto"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-left mb-4">Personal Information</h5>
        <div className="row mb-1">      
        <p className="col-md-3 text-left">Arabic Name:</p>
        <p className="col-md-5 text-left text-muted">يوسف جمال النجار</p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Emglish Name:</p>
        <p className="col-md-5 text-left text-muted">
          Yousef Jamal Al-najjar</p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Division:</p>
        <p className="col-md-5 text-left text-muted"> Information Technology</p>
      </div>

      <div className="row mb-1">      
        <p className="col-md-3 text-left">Organization Unit</p>
        <p className="col-md-5 text-left text-muted"> ITG</p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Job</p>
        <p className="col-md-5 text-left text-muted">IT Specialist</p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Office Phone</p>
        <p className="col-md-5 text-left text-muted"> 962-06-5600000</p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Office Ext</p>
        <p className="col-md-5 text-left text-muted"> 9534</p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Direct Number</p>
        <p className="col-md-5 text-left text-muted"> 000-00-0000000 </p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Fax Number</p>
        <p className="col-md-5 text-left text-muted"> --- </p>
      </div>
      <div className="row mb-1">      
        <p className="col-md-3 text-left">Mobile Number</p>
        <p className="col-md-5 text-left text-muted"> 962-79-9229509 </p>
      </div>
      </div>
  
    </div>
  </div>
</div>

                       {/*  <h4 className="card-title mb-4">Change UserName</h4>

                        <Card>
                            <CardBody>
                               <AvForm className="form-horizontal" onValidSubmit={(e,v) => { this.handleValidSubmit(e,v) }}>
                                    <div className="form-group">
                                         <AvField name="username" label="UserName" value={this.state.name} className="form-control" placeholder="Enter UserName" type="text" required />
                                         <AvField name="idx"  value={this.state.idx}  type="hidden"  />
                                    </div>
                                     <div className="text-left mt-4">
                                         <Button type="submit" color="danger">Edit UserName</Button>
                                    </div>
                               </AvForm>
                            
                            </CardBody>
                        </Card> */}
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
            
const mapStatetoProps = state => {
    const { error,success } = state.Profile;
    return { error,success };
}

export default withRouter(connect(mapStatetoProps, { editProfile })(UserProfile));

