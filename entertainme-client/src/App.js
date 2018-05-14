import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MoviesList from './components/movies/MoviesList'
import MoviesDetails from './components/movies/MoviesDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MoviesDetails} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
