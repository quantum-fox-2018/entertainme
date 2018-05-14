import React, { Component } from 'react'
import { GET_ALL_MOVIES_QUERY } from '../graphql/querytype'
import { Query } from "react-apollo"
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import './ListMovies.css'
import { AddMovie } from '../components/AddMovie'
class ListMovies extends Component {
  
  render() {
    return (
      <div>
        <h1> List Movies </h1>
        <Query query={ GET_ALL_MOVIES_QUERY }>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading data......</p>;
            if (error) return <p>Error :( </p>;
            return (
              <table id="movies">
                <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Overview</th>
                      <th>Popularity</th>
                      <th>Action</th>
                    </tr>
                </thead>
                  <tbody>
                    {
                      data.movies.map(( movie, index ) => (
                        <tr key={index}>
                          <td> {index + 1}</td>
                          <td>{movie.title}</td>
                          <td>{movie.status}</td>
                          <td>{movie.overview}</td>
                          <td>{movie.popularity}</td>
                          <td> <button type="button"><Link to={movie._id}> DETAIL </Link> </button> | <button type="button"><Link to={`/edit/${movie._id}/${movie.title}/${movie.status}/${movie.overview}/${movie.popularity}`}> EDIT </Link></button> | <DeleteButton id={movie._id}/> </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              )
          }}
        </Query>
        <h1> Add New Movie </h1>
        <AddMovie />
      </div>
    )
  }
}

export default ListMovies;