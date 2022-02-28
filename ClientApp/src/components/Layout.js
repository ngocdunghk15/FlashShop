import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu/NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container style={{paddingTop:'91px',maxWidth:'100vw',paddingLeft:'0px',paddingRight:'0px'}}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
