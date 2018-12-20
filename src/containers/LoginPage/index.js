import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import SearchUsers from '../../components/SearchUsers';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <div className='login-search'>
          <SearchUsers />
        </div>
      </div>
    );
  }
}

export default LoginPage;
