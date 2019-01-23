import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { getUserData } from '../../actions/thunks/getUserData';

import './SearchInput.scss';

export class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      svgClass: 'login-search-icon',
      inptPlaceholder: 'Enter your GitHub username'
    }
  }

  handleSearchChange = (e) => {
    if (!e.target.value.length) {
      this.setState({ 
        query: e.target.value,
        svgClass: 'login-search-icon'
      })
    } else {
      this.setState({ 
        query: e.target.value,
        svgClass: 'login-search-icon-active'
      })
    }
  }

  submitSearch = (event) => {
    event.preventDefault();
    if (this.state.query.length) {
      this.props.getUserData({ username: this.state.query })
      this.setState({
        searchUsers: true,
        svgClass: 'login-search-icon'
      })
    }
  }

  getPlaceholder = () => {
    if (this.props.loadingUser.loadingUser === true) {
      return 'looking up user'
    } else if (this.props.hasErrored.hasErrored === true) {
      return this.props.hasErrored.message 
    } else {
      return 'Enter your GitHub username'
    }
  }
  
  getMiniPlaceholder = () => {
    if (this.props.loadingUser.loadingUser === true) {
      return 'Finding user'
    } else if (this.props.hasErrored.hasErrored) {
      return 'User not found'
    } else {
      return 'Enter username'
    }
  }

  render() {
    if (this.state.searchUsers === true) {
      this.setState({ searchUsers: false, query: '' })
      return <Redirect push to={`/main/${this.state.query}`} />
    }

    return (
      <form noValidate onSubmit={this.submitSearch} className={`search-input-form`}>
        <input
          required
          id="search-input" 
          className="input-search"
          placeholder={this.getPlaceholder()}
          value={this.state.query}
          onChange={this.handleSearchChange}
        >
        </input>
        <input
          required
          id="search-input" 
          className="input-search-mini"
          placeholder={this.getMiniPlaceholder()}
          value={this.state.query}
          onChange={this.handleSearchChange}
        >
        </input>
        {/* <input style={{ width: 0, height: 0, margin: 0, padding: 0, zIndex: -1000 }} type='submit'></input> */}
        <button className='search-input-btn-box'>
          <svg
            onClick={this.submitSearch}
            className={`${this.state.svgClass}`}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px">
            <path 
              d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
            />
          </svg>
        </button>
      </form>
    );
  }
}

export const mapStateToProps = ({ hasErrored, loadingUser }) => ({ hasErrored, loadingUser })

export const mapDispatchToProps = (dispatch) => ({
  getUserData: (username) => dispatch(getUserData(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);