import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import ForceBubbles from '../../components/ForceBubbles';
import SearchBar from '../../components/SearchBar';

export class LoginPage extends Component {
  render() {
    return (
      <div className="data-slider">
        <div className='login-search'>
          <SearchBar loginPage={this.props.loginPage}/>
        </div>
        <ForceBubbles customHeight={window.innerHeight}/>
      </div>
    );
  }
}

export default LoginPage;
