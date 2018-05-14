import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ApolloProvider } from "react-apollo";
import client from './graphql/client.js'

import ListMovie from './components/ListMovie'
import Movie from './components/Movie'


class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Switch>
              <Route exact path="/" component={ListMovie}/>
              <Route exact path="/:id" component={Movie}/>
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
