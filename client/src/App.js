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
          <h1 className="App-title">List Movies</h1>
        </header>
        <div className="App-intro">
        <Query
          query={gql`
            {
              movies {
                _id
                title
                overview
                poster_path
                popularity
                status
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.movies.map(movie => (
              <div key={ movie._id }>
                <h3>{ movie.title }</h3>
                <img src={movie.poster_path} alt=""/>
                <p>{ movie.overview }</p>
                <p>Score: { movie.popularity }</p>
                <hr/>
              </div>)
            )
          }}
        </Query>
        </div>
      </div>
    );
  }
}

export default App;
