import React, { Component } from 'react'
import { GET_ALL_MOVIES_QUERY } from '../graphql/querytype'
import { Query } from "react-apollo"
import { Link } from 'react-router-dom'
import DeleteMovie from './DeleteMovie'
class ListMovies extends Component {
  
  render() {
    return (
      <div>
        <Query query={ GET_ALL_MOVIES_QUERY }>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading......</p>;
            if (error) return <p>Error :( </p>;
            return (
              <table id="movies">
                <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Overview</th>
                      <th>Action</th>
                    </tr>
                </thead>
                  <tbody>
                    {
                      data.movies.map(( movie, index ) => (
                        <tr key={index}>
                          <td>{movie.title}</td>
                          <td>{movie.status}</td>
                          <td>{movie.overview}</td>
                          <td> <Link to={movie._id}> Detail </Link> | <DeleteMovie id={movie._id}/> </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              )
          }}
        </Query>
      </div>
    )
  }
}

export default ListMovies;