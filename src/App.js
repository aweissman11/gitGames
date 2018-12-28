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
          <Route exact path='/main' component={MainPage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/main/:username' render={({ match }) => {
            return <MainPage username={match.params.username}/>
          }} />
          <Route exact path='/' component={MainPage}/>
          <Route path='/' render={({ match }) => {
            return <MainPage pageNotFound={true} />
          }} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App));
