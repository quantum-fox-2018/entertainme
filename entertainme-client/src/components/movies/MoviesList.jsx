import React, { Component } from 'react'
import { GET_ALL_MOVIES } from '../../graphql/queryType'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import AddMovie from './AddMovie'
import DeleteMovie from './DeleteMovie'

class MoviesList extends Component {
  render() {
    return (
      <div>
        <AddMovie />
        <h2>List of Movies</h2>
        <Query query={ GET_ALL_MOVIES }>
          {({ loading, error, data }) => {
            if (loading) return <h4>Please Wait....</h4>
            if (error) return <h4>Something went wrong...</h4>
            return (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Title</th>
                      <th>Popularity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(data.movies)}
                    {
                      data.movies.map((movie, index) => (
                        <tr key={movie._id}>
                          <td>{index+1}</td>
                          <td>{movie.title}</td>
                          <td>{movie.popularity}</td>
                          <td>
                            <Link to={movie._id}>Detail</Link> | 
                            Update | 
                            <DeleteMovie id={movie._id}/>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default MoviesList