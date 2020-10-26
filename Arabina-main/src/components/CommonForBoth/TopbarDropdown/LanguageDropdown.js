import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//i18n
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

// falgs
import usFlag from "../../../assets/images/flags/us.jpg";
import spain from "../../../assets/images/flags/spain.jpg";
import germany from "../../../assets/images/flags/germany.jpg";
import italy from "../../../assets/images/flags/italy.jpg";
import russia from "../../../assets/images/flags/russia.jpg";
import Arabic from "../../../assets/images/flags/jordan.png"

class LanguageDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      lng : "English",
      flag : usFlag
    };
    this.toggle = this.toggle.bind(this);
    this.changeLanguageAction = this.changeLanguageAction.bind(this);
  }

  changeLanguageAction = (lng) => {

     //set language as i18n
     i18n.changeLanguage(lng);

    if(lng === "sp")
        this.setState({lng : "Arabic", flag : Arabic });
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }

  render() {

    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        >
          <DropdownToggle
            className="btn header-item waves-effect"
            tag="button"
          >
            <img
              src={this.state.flag}
              alt="Skote"
              height="16"
              className="mr-1"
            />
               <span className="align-middle">{this.state.lng}</span>
          </DropdownToggle>
          <DropdownMenu className="language-switch" right>
            <DropdownItem tag="a" href="#" onClick={() => this.changeLanguageAction('eng')} className={`notify-item ${this.state.lng === 'English' ? 'active' : 'none'}`}>
              <img src={usFlag} alt="Skote" className="mr-1" height="12" />
              <span className="align-middle">English</span>
            </DropdownItem>
            <DropdownItem tag="a" href="#" onClick={() => this.changeLanguageAction('ar')} className={`notify-item ${this.state.lng === 'Arabic' ? 'active' : 'none'}`}>
              <img src={Arabic} alt="Skote" className="mr-1" height="12" />
              <span className="align-middle">Arabic</span>
            </DropdownItem>
           
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default withNamespaces()(LanguageDropdown);
