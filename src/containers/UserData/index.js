import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
// import { Route, withRouter, Switch } from 'react-router-dom';

import './UserData.css';


const UserData = (props) => {
    return (
      <div className="login-page">
        <h1 className="username"><span>{
            props.isLoading.isLoading ? <ReactLoading type={'spokes'} color={'blueviolet'} height={40} width={40} /> : props.userData.login
          }</span>
        </h1>
      </div>
    );
}

export const mapStateToProps = ({ userData, isLoading }) => ({ userData, isLoading })

export default connect(mapStateToProps, null)(UserData);
