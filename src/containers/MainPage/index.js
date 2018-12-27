import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import './MainPage.css';
import SearchBar from '../../components/SearchBar';
import DataSlider from '../DataSlider';

import { getUserData } from '../../actions/thunks/getUserData';

class MainPage extends Component {
  componentDidMount() {
    const username = this.props;
    if (username) {
      this.props.getUserData(username)
    }
  }

  render() {
    return (
      <div className="main-page">
        <SearchBar />
        <DataSlider />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getUserData: (username) => dispatch(getUserData(username))
})

export default connect(null, mapDispatchToProps)(MainPage);
