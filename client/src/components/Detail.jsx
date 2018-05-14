import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'

const GET_MOVIE_ID = gql`
query moviesid($id: String) {
  movieById(_id: $id) {
    title
    overview
    popularity
    poster_path
    popularity
  }
}
`;
class Detail extends Component {
  render() {
    const id = this.props.match.params.id
    return (
      <div>
        <Query query={GET_MOVIE_ID} variables={{id}}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return <p>judul :{ data.movieById.title } - overview :{ data.movieById.overview } - popularity: {data.movieById.popularity} - poster_path:{data.movieById.poster_path}</p>
          }}
        </Query>
      </div>
    );
  }
}

export default Detail;
