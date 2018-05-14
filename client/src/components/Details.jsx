import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_MOVIE_ID = gql`
  query movieById($_id: String) {
    movieById(_id: $_id) {
      title
      overview
      poster_path
      popularity
      status
    }
  }
`;

class Details extends Component {
  render() {
    const id = this.props.match.params._id
    console.log(id)
    return (
      <Query query={GET_MOVIE_ID} variables={{ _id: id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error!: ${error}`;

          return (
            <div>
              <h1>{ data.movieById.title }</h1>
              <img src={data.movieById.poster_path} alt=""/>
              <p>{ data.movieById.overview }</p>
              <p>Score: { data.movieById.popularity }</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Details;