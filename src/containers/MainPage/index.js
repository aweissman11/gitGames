import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginPage from '../LoginPage';
import SearchBar from '../../components/SearchBar';
import DataSlider from '../DataSlider';
import { InfoPage } from '../../components/InfoPage';
import { getUserData } from '../../actions/thunks/getUserData';

import './MainPage.css';

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
