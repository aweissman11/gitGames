import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';


const UserData = (props) => {
    return (
      <div className="login-page">
        <h1>USERNAME: {
            props.userData ? props.userData.login : 'no username found'
          }
        </h1>
      </div>
    );
}

export const mapStateToProps = ({ userData }) => ({ userData })

export default connect(mapStateToProps, null)(UserData);
