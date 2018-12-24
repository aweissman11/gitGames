import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import './MainPage.css';

import SearchBar from '../../components/SearchBar';
import DataSlider from '../DataSlider';

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <SearchBar />
        <DataSlider />
      </div>
    );
  }
}

export default MainPage;
