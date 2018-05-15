import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { DELETE_MOVIE } from '../graphql/queryType'
import swal from 'sweetalert'

class DeleteMovie extends Component {
  deleteOnClick = (deleteMovie) => {
    let movieId = this.props.id
    console.log(movieId)
    swal({
      title: 'Are you sure?',
      text: `Are you really gonna delete this?"`,
      icon: 'warning',
      buttons: [true, 'Yes Delete it']
    }).then(result => {
      if (result) {
        deleteMovie({variables: {id: movieId}})
      }
    })
  }

  render() {
    return (
      <Mutation mutation={ DELETE_MOVIE }>
        {deleteMovie => (
          <a style={{cursor:'help'}}
            onClick={() => this.deleteOnClick(deleteMovie)}
          >Delete</a>
        )}
      </Mutation>
    )
  }
}

export default DeleteMovie