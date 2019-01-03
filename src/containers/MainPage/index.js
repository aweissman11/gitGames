import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginPage from '../LoginPage';

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

      !(this.props.hasErrored === true) ?
      <div className="main-page">
        <SearchBar />
        <DataSlider />
      </div>
      :
      <LoginPage loginPage={true} pageNotFound={true} />
    )
  }
}

export const mapStateToProps = ({ hasErrored }) => ({ hasErrored })

export const mapDispatchToProps = (dispatch) => ({
  getUserData: (user) => dispatch(getUserData(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
