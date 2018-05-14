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
          <h1>Movies List!</h1>
        </div>
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
      {({loading, error, data}) => {
        console.log("====",data)
        if(loading) return <h2>Loading data...</h2>;
        if(error) return <h2>something wrong!!!</h2>;
        return data.movies.map(({_id, title, overview})=>(
          <div key={_id}>
            <p>{title}</p>
            <p>{overview}</p>
          </div>
        ));
      }}
      </Query>
      </div>
    );
  }
}

export default App;
