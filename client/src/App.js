import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Details from './components/Details.jsx'
import Home from './components/Home.jsx'
import Add from './components/Add.jsx'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">List Movies</h1>
        </header>
        <div className="App-intro">
        </div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/details/:_id" component={ Details } />
          <Route path="/add" component={ Add }/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
