import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListMovies from './components/ListMovies'
import DetailMovie from './components/DetailMovie'
import EditForm from './components/EditForm'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Fav Movies Application</h1>
          </header>
          <div className="App-intro">
            <Switch>
              <Route exact path="/" component={ ListMovies }/>
              <Route path="/edit/:id/:title/:status/:overview/:popularity" component={ EditForm }/>
              <Route path="/:id" component={ DetailMovie }/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
