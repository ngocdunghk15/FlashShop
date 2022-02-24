import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'
import './NavMenu.css';
import {
  LogoBrandWrap,
  LogoBrand,
  BrandText,
  SignInBtn,
  SignInWrap,
  SearchWrap,
  InputSearch,
  FanpageWrap,
  FanpageLink
} from './NavMenuElements';

export class NavMenu extends Component {
  static displayName = NavMenu.name;


  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm " light>
          <Container>
            <NavbarBrand tag={Link} to="/">
              <LogoBrandWrap>
                <LogoBrand src={require('../../images/brand-logo.png').default} />
                <BrandText>FLSHOP</BrandText>
              </LogoBrandWrap>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-center" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow navigation">
                <NavItem className="nav-item" onClick={()=>{
                  if(window.outerWidth<="576"){
                    this.toggleNavbar()
                  }
                }}>
                  <NavLink tag={Link} className="text-dark" to="/">About</NavLink>
                </NavItem>
                <NavItem  className="nav-item" onClick={()=>{
                  if(window.outerWidth<="576"){
                    this.toggleNavbar()
                  }
                }}> 
                  <NavLink tag={Link} className="text-dark" to="/products">Products</NavLink>
                </NavItem>
                <NavItem className="nav-item sub-nav" onClick={()=>{
                  if(window.outerWidth<="576"){
                    this.toggleNavbar()
                  }
                }}>
                  <NavLink tag={Link} className="text-dark" to="/products">Services</NavLink>
                </NavItem >
                <FanpageWrap className="nav-item" onClick={()=>{
                  if(window.outerWidth<="576"){
                    this.toggleNavbar()
                  }
                }}>
                  <FanpageLink target="_blank" href="https://www.facebook.com/UET-League-Of-Legends-Club-105847131898074" className="text-dark">Fanpage</FanpageLink>
                </FanpageWrap>
                <NavItem className="nav-item sub-nav" onClick={()=>{
                  if(window.outerWidth<="576"){
                    this.toggleNavbar()
                  }
                }}>
                  <NavLink tag={Link} className="text-dark" to="/products">Help</NavLink>
                </NavItem>
                <SignInWrap className="none-list-style" onClick={()=>{
                  if(window.outerWidth<="576"){
                    this.toggleNavbar()
                  }
                }}>
                  <SignInBtn className="trim-text" to="/signin">Sign In</SignInBtn>
                </SignInWrap>
              </ul>
            </Collapse>
            <SearchWrap>
              <InputSearch placeholder="Search..." />
            </SearchWrap>
          </Container>
        </Navbar>
      </header>
    );
  }
}
