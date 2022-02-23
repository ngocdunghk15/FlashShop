import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import HomePage from './pages';
import Products from './pages/products';
import SignIn from './pages/signin';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={Products} />
        <Route path='/signin' component={SignIn} />
      </Layout>
    );
  }
}
