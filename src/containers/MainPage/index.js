import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import DataSlider from '../DataSlider';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <h1>Main Page</h1>
        <h2>{this.props.username}</h2>
        <DataSlider />
      </div>
    );
  }
}

export default MainPage;
