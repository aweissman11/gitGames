import React, { Component } from 'react';
// import { Route, withRouter, Switch } from 'react-router-dom';

import ForceBubbles from '../../components/ForceBubbles';
import SearchBar from '../../components/SearchBar';

import './LoginPage.css';

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div className='login-search'>
          <SearchBar loginPage={this.props.loginPage}/>
        </div>
        <ForceBubbles customHeight={window.innerHeight - 70}/>
        <div className='big-box'>
          {
            this.props.pageNotFound ? <h1 className='page-not-found'>Page Not Found</h1> : <p></p>
          }
        </div>
      </div>
    );
  }
}

export default LoginPage;
