import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from "graphql-tag";

import Loading from './Loading';
import Error from './Error';
import { EditMovie } from './EditMovie';

const movieQuery = gql`
  query movieById($id: String) {
    movie(id: $id) {
      title
      overview
      poster_path
      popularity
    }
  }
`

class Movie extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <Query
        query={ movieQuery }
        variables={ { id } }
      >
       {({ loading, error, data }) => {
          if(loading) return <Loading/>;
          if(error) return <Error/>;
          return (
            <div>
              <div>
                <EditMovie id={id} movie={data.movie}/>
              </div>
              <div>
                <button  onClick={() => this.props.history.push('/')}>Home</button>
              </div>
            </div>
          )
       }}
      </Query>
    );
  }
}

export default Movie;