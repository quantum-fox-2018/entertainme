import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Query } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <Query
        query={gql`
        {
          movies {
            title
            overview
          }
        }
        `}
        >
          {({ loading, error, data }) => {
            console.log(data)
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
      
            return data.movies.map(({ title, poster_path, overview, popularity, _id }) => (
              <div key={_id}>
                <p>{ title }</p>
                <p>{ overview }</p>
                <p>{ poster_path }</p>
                <p>{ popularity }</p>
              </div>
            ));
          }}
</Query>
        </div>
      </div>
    );
  }
}

export default App;
