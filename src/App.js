import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/main' component={MainPage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/main/:username' render={({ match }) => {
            return <MainPage username={match.params.username}/>
          }} />
          <Route exact path='/' component={MainPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
