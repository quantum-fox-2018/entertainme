import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from './graphql/client'
import Home from './components/Home'
import Detail from './components/Detail'
import EditForm from './components/EditForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App">
          <Router>
            <ApolloProvider client={client}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detail/:id/:action" component={Detail} />
                <Route path="/edit/:id/:title/:overview" component={EditForm} />
              </Switch>
            </ApolloProvider>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
