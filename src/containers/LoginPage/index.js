import React, { Component } from 'react';
import SearchInput from '../../components/SearchInput';
import { ReactComponent as LogoSvg } from '../../assets/Octicons-mark-github.svg';


import './LoginPage.scss';

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-site-title">
          <div className="login-logo-box">
            <LogoSvg className="login-logo" />
          </div>
          <h1 className="login-title">
            <span className="login-big-g">G</span>
            it
            <span className="login-big-g">G</span>
            ames
          </h1>
        </div>
        <div className="login-search-form">
          <SearchInput />
        </div>
        {
          this.props.pageNotFound ?
          <div>
            <p>Page not found, please use the search</p>
          </div>
          :
          <div></div>
        }
      </div>
    );
  }
}

export default LoginPage;
