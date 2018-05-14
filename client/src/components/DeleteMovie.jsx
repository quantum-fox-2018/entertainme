import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const DELETE_MOVIE = gql`
  mutation deleteMovie($id: String) {
    deleteMovie(_id: $id) {
      message
    }
  }
`

class DeleteMovie extends Component {
  deleteEvent = (deleteMovie) => {
    if (window.confirm("Are you sure want to delete this data?")) {
      deleteMovie({
        variables: {
          id: this.props.movieId
        }
      })
      alert('Delete data success')
      window.location.reload()
    }
  }

  render() {
    return (
      <Mutation mutation={ DELETE_MOVIE }>
        {
          deleteMovie => (
            <button onClick={() => { this.deleteEvent(deleteMovie) }} className="btn btn-danger">Delete</button>
          )
        }
      </Mutation>
    )
  }
}

export default DeleteMovie;