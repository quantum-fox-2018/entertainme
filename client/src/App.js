import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListMovies from './components/ListMovies'
import DetailMovie from './components/DetailMovie'
import { AddMovie } from './components/AddMovie'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <AddMovie />
            <Route exact path="/" component={ ListMovies }/>
            <Route path="/:id" component={ DetailMovie }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
