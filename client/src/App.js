import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home'
import DetailMovie from './components/DetailMovies'
import AddMovie from './components/AddMovie'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/detailmovie/:id" component={DetailMovie} />
            <Route path ="/addmovie" component={AddMovie} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
