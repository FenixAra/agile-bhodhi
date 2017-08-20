import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import './css/App.css';

export default class NavBar extends Component {
  render() {
    return (
    	<div className="Normal-div">
	      <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="/">Agile Bodhi</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="/">Blog</NavItem>
			        <NavItem eventKey={2} href="/">About me</NavItem>
			        <NavDropdown eventKey={3} title="Gallery" id="basic-nav-dropdown">
			          <MenuItem eventKey={3.1}>Videos</MenuItem>
			          <MenuItem eventKey={3.2}>Photos</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={3.3}>Lectures</MenuItem>
			        </NavDropdown>
			      </Nav>
			      <Nav pullRight>
			      	<NavItem eventKey={1} href="/">Contact us</NavItem>
			        <NavItem eventKey={2} href="/">Help</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			  </div>
    );
  }
}
