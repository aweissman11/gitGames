import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUserData } from '../../actions/thunks/getUserData';

import './SearchUsers.css';

class SearchUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      searchInputIsToggled: false,
      boxWidth: '',
      inputWidth: '',
      formWidth: '',
      svgToggled: '',
      searchUsers: false
    }
  }
  
  toggleSearchInput = () => {
    if (!this.state.searchInputIsToggled) {
      this.setState({
        query: '',
        searchInputIsToggled: true,
        boxWidth: 'search-box-width',
        inputWidth: 'search-input-width',
        formWidth: 'search-form-width',
        svgToggled: 'toggled'
      })
    } else {
      this.setState({
        query: '',
        searchInputIsToggled: false,
        boxWidth: '',
        inputWidth: '',
        formWidth: '',
        svgToggled: ''
      })
    }
  }

  handleSearchChange = (e) => {
    this.setState({ query: e.target.value })
  }

  submitSearch = (event) => {
    event.preventDefault();
    this.props.getUserData({ username: this.state.query })
    this.setState({
      searchUsers: true
    })
  }

  render() {
    if (this.state.searchUsers === true) {
      return <Redirect to={`/main/${this.state.query}`} />
    }

    return (
      <div className={`search-box ${this.state.boxWidth}`}>
        <form onSubmit={this.submitSearch} className={`search-form ${this.state.formWidth}`}>
          <input 
            className={`search-input ${this.state.inputWidth}`}
            placeholder="Search GitHub Users..."
            value={this.state.query}
            onChange={this.handleSearchChange}
          >
          </input>
        </form>
        <svg
          onClick={this.toggleSearchInput}
          className={`svg-search ${this.state.svgToggled}`}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px">
          <path 
            d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
          />
        </svg>
      </div>


    );
  }
}


export const mapDispatchToProps = (dispatch) => ({
  getUserData: (username) => dispatch(getUserData(username))
})

export default connect(null, mapDispatchToProps)(SearchUsers);