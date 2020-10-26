import React, { Component } from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/images/ar.png";
import logoLightPng from "../../assets/images/ar.png";
import logoLightSvg from "../../assets/images/ar.png";
import logoDark from "../../assets/images/ar.png";

// import images
import github from "../../assets/images/brands/github.png";
import hr from "../../assets/images/hr.svg";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

//i18n
import { withNamespaces } from 'react-i18next';

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      keyword: ''
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }


  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  handelSearchChange = (e)=>{
    if(e.target.value == 'islam ' || e.target.value == 'Islam '){
      window.open("contacts-grid");
    }else{
      console.log(e.target.value);
    }

    this.setState({keyword:e.target.value});
   
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img  alt="" height="50" 
                    src={logo}
                    />
                  </span>
                  <span className="logo-lg">
                    <img  alt="" height="50" 
                    src={logo}/>
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img  alt="" height="50" 
                    src={logo}/>
                  </span>
                  <span className="logo-lg">
                    <img  alt="" height="50" 
                    src={logo}/>
                  </span>
                </Link>
              </div>

              <button type="button" onClick={this.toggleMenu} className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder={this.props.t('Search') + "..."} value={this.state.keyword} onChange={this.handelSearchChange}/>
                  <span className="bx bx-search-alt"></span>
                </div>
              </form>

              <Dropdown className="dropdown-mega d-none d-lg-block ml-2" isOpen={this.state.megaMenuDrp} toggle={() => { this.setState({ megaMenuDrp: !this.state.megaMenuDrp }) }}>
                <DropdownToggle className="btn header-item waves-effect" caret tag="button"> {this.props.t('Mega Menu')} {" "}
                  <i className="mdi mdi-chevron-down"></i></DropdownToggle>
                <DropdownMenu className="dropdown-megamenu">
                  <Row>
                    <Col sm={8}>
                      <Row>
                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">{this.props.t('General')}</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t('AB World Wide')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Awards')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Mission, Vision & Values')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Policies and Procedures')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Min Codes')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Working Days & Hours for Countries')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Countries Official Holidays')}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">{this.props.t('Links')}</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t('Process Portal')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('eProcurement')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('System Links')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('HR Clearance')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Bank Global Site')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Global Financial Sites')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Arabi Online')}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col md={4}>
                          <h5 className="font-size-14 mt-0">{this.props.t('AB News')}</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t('AB Announcements')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('AB News')}</Link>
                            </li>
                            <li>
                              <Link to="#">
                                {this.props.t('Internal Newsletters')}
                              </Link>
                            </li>
                            <li>
                              <Link to="#">  {this.props.t('RSS')}</Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4}>
                      <Row>
                        <Col sm={6}>
                          <h5 className="font-size-14 mt-0">{this.props.t('Workspace')}</h5>
                          <ul className="list-unstyled megamenu-list">
                            <li>
                              <Link to="#">{this.props.t('IT Service Desk')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Maintenance & Facility Management Service Desk')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('IT Service Desk Feedback')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('My Profile')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Materials/Logos PP Presentations')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Countries Times')}</Link>
                            </li>
                            <li>
                              <Link to="#">{this.props.t('Loan Calculator')}</Link>
                            </li>
                          </ul>
                        </Col>

                        <Col sm={5}>
                          <div>
                            <img
                              src={megamenuImg}
                              alt=""
                              className="img-fluid mx-auto d-block"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <button onClick={() => { this.setState({ isSearch: !this.state.isSearch }); }} type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown">
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div className={this.state.isSearch ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show" : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"}
                  aria-labelledby="page-header-search-dropdown">

                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <LanguageDropdown />

              <Dropdown className="d-none d-lg-inline-block ml-1" isOpen={this.state.socialDrp} toggle={() => { this.setState({ socialDrp: !this.state.socialDrp }) }}>
                <DropdownToggle className="btn header-item noti-icon waves-effect" tag="button">
                  <i className="bx bx-customize"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg" right>
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="myhr">
                          <img src={hr} alt="HR" />
                          <span>MyHR</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>Bitbucket</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dribbble} alt="dribbble" />
                          <span>Dribbble</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>Dropbox</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>Mail Chimp</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={slack} alt="slack" />
                          <span>Slack</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" onClick={this.toggleFullscreen} className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>

              <NotificationDropdown />
              <ProfileMenu />

              <div onClick={this.toggleRightbar} className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                  <i className="bx bx-cog bx-spin"></i>
                </button>
              </div>

            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(withNamespaces()(Header));
