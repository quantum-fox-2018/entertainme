import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to={'/add'}><h1>Add Movie</h1></Link>
        <hr/>
        <h2>List Movies:</h2>
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
              <Link to={`/details/${movie._id}`}><h3>{ movie.title }</h3></Link>
            </div>)
          )
        }}
      </Query>
      </div>
    );
  }
}

export default Home;