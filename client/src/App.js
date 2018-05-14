import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import DetailMovie from './components/DetailMovie';
import UpdateMovie from './components/UpdateMovie';
import Home from './scenes/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Entertainme!</h1>
          </header>
          <div className="App-intro">
            <Route exact path="/" component={ Home } />
            <Route exact path="/:id" component={ DetailMovie } />
            <Route exact path="/:id/edit" component={ UpdateMovie } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
