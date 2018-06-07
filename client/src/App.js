import React, { Component } from 'react'
import './App.css'
import ListMovie from './components/ListMovie'
import MoviesDetails from './components/MoviesDetails'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <Route exact path="/" component={ListMovie} />
            <Route path="/:id" component={MoviesDetails} />
          </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
