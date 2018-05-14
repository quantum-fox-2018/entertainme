import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import '../App.css';
import DeleteMovie from './DeleteMovie';

const LOAD_ALL_MOVIES = gql`
  {
    movies {
      _id
      title
      popularity
      overview
      poster_path
      status
      tag
    }
  }
`

class ListMovie extends Component {
  render() {
    return (
      <Query query={ LOAD_ALL_MOVIES }>
        {
          ({loading , error, data}) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Oops, something wrong</p>

            return (
              <table className="tableMovie">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Overview</th>
                    <th>Popularity</th>
                    <th>Tag</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.movies.map((movie, index) => (
                      <tr key={movie._id}>
                        <td>{ index + 1 }</td>
                        <td>{ movie.title }</td>
                        <td>{ movie.overview }</td>
                        <td>{ movie.popularity } / 10</td>
                        <td>{ movie.tag }</td>
                        <td>
                          <Link to={ movie._id }>
                            <button className="btn btn-primary">Detail</button>
                          </Link>
                          <Link
                            to={{ pathname: `${movie._id}/edit`, query: { movie } }}>
                            <button className="btn btn-secondary">Edit</button>
                          </Link>
                          <DeleteMovie movieId={ movie._id } />
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        }
      </Query>
    );
  }
}

export default ListMovie;