import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, withRouter, Switch } from 'react-router-dom';

import './SearchUsers.css';

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }
  }

  handleSearchChange = (e) => {
    this.setState({ query: e.target.value })
  }

  submitSearch = (event) => {
    event.preventDefault();
    this.setState({ query: '' })
    console.log('Submit User Search')
    console.log('query entry:', this.state.query);
  }

  render() {
    return (
      <form 
        className='search-form'
        onSubmit={this.submitSearch}
      >
        <input 
          className='search-input'
          placeholder='search users'
          value={this.state.query}
          onChange={this.handleSearchChange}
        ></input>
      </form>

    );
  }
}

export default LoginPage;
