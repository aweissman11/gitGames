import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import LoginPage from '../LoginPage';

import './MainPage.css';
import SearchBar from '../../components/SearchBar';
import DataSlider from '../DataSlider';
import ShareButton from '../../components/ShareButton';
import { InfoPage } from '../../components/InfoPage';


import { getUserData } from '../../actions/thunks/getUserData';

export class MainPage extends Component {
  componentDidMount() {
    const username = this.props;
    if (username) {
      this.props.getUserData(username)
    }
  }

  render() {
    return (
      this.props.hasErrored.hasErrored === true ?
        <LoginPage />
      :
        <div className="main-page">
          <InfoPage />        
          <SearchBar />
          <DataSlider />
          {/* <ShareButton username={this.props.username}/> */}
        </div>
    )
  }
}

export const mapStateToProps = ({ hasErrored, loadingUser }) => ({ hasErrored, loadingUser })

export const mapDispatchToProps = (dispatch) => ({
  getUserData: (user) => dispatch(getUserData(user)),
  hasErrored: (message, hasErrored) => dispatch(hasErrored(message, hasErrored))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
