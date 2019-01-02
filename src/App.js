import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';

export class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Switch>
          <Route exact path='/main/:username' render={({ match }) => {
            return <MainPage username={match.params.username}/>
          }} />
          <Route exact path='/main' render={({ match }) => {
            return <LoginPage loginPage={true} />
          }} />
          <Route exact path='/login' render={({ match }) => {
            return <LoginPage loginPage={true} />
          }} />
          <Route exact path='/' render={({ match }) => {
            return <LoginPage loginPage={true} />
          }} />
          <Route path='/' render={({ match }) => {
            return <LoginPage loginPage={true} pageNotFound={true} />
          }} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App));
