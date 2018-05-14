import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx'
import Detail from './components/Detail.jsx'
import Addmovie from './components/Addmovie.jsx'


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
              <Route exact path="/" component={ Home }/>
              <Route exact path="/detail/:id" component={ Detail }/>
              <Route exact path="/addmovie" component={ Addmovie }/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
