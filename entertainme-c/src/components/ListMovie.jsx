import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from "graphql-tag";

import Loading from './Loading';
import Error from './Error';

import { AddMovie } from './FormMovie';
import { EditMovie } from './EditMovie';
import DeleteMovie from './DeleteMovie';

const moviesQuery = gql`
  {
    movies {
      _id
      title
      overview
      poster_path
      popularity
    }
  }
`

class ListMovie extends Component {
  render() {
    return (
      <Query
        query={ moviesQuery }
      >
       {({ loading, error, data }) => {
          if(loading) return <Loading/>;
          if(error) return <Error/>;
          return (
            <div>
              <AddMovie/>
              <table>
                <thead>
                  <th>No</th>
                  <th>Title</th>
                  <th></th>
                  <th></th>
                </thead>
              {
                data.movies.map((movie, i) => (
                  <tbody>
                    <th>{ i+1 }</th>
                    <th>{ movie.title }</th>
                    <th><DeleteMovie id={movie._id}/></th>
                    <th>
                      <button onClick={() => this.props.history.push('/' + movie._id)}>
                        Read More
                      </button>
                    </th>
                  </tbody>
                ))
              }
              </table>
            </div>
          )
       }}
      </Query>
    );
  }
}

export default ListMovie;