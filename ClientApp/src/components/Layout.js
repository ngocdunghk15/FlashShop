import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu/NavMenu';

export function Layout(props) {
  return (
    <div>
      <NavMenu userName={props.userName} />
      <Container style={{ paddingTop: '91px', maxWidth: '100vw', paddingLeft: '0px', paddingRight: '0px' }}>
        {props.children}
      </Container>
    </div>
  );
}
