import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_MOVIE_ID = gql`
  query movie($id: String) {
    movie(id: $id) {
      title
      overview
      poster_path
      popularity
    }
  }
`;

class Details extends Component {
  render() {
    const id = this.props.match.params.key
    console.log(id)
    return (
      <Query query={GET_MOVIE_ID} variables={{ id: id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error!: ${error}`;
          return (
            <div>
              <h1>{ data.movie.title }</h1>
              <img src={data.movie.poster_path} alt=""/>
              <p>{ data.movie.overview }</p>
              <p>Score: { data.movie.popularity }</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Details;