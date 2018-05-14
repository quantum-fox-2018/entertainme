import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import MovieList from './components/MovieList.jsx'
import Error from './components/Error.jsx'
import Detail from './components/Detail.jsx'
import './App.css';

class App extends Component {
  render() {
    return ( 
      <Router> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to='/home'>
            <h1 className="App-title">Agrha Ganteng MovieList</h1>
          </Link>
        </header>
          <Switch>
            <Route exact path="/" component={MovieList}/>
            <Route exact path="/:key" component={Detail}/>
            <Route component={Error}/>
          </Switch>
       </div>    
      </Router>  
    );
  }
}

export default App;
