import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { DELETE_MOVIE } from '../../graphql/queryType'
import swal from 'sweetalert'

class DeleteMovie extends Component {
  deleteOnClick = (deleteMovie) => {
    let movieId = this.props.id
    swal({
      title: 'Are you sure?',
      text: `Are you really gonna delete this?"`,
      icon: 'warning',
      buttons: [true, 'Yes Delete it']
    }).then(result => {
      if (result) {
        deleteMovie({variables: {_id: movieId}})
        window.location.reload()
      }
    })
  }

  render() {
    return (
      <Mutation mutation={DELETE_MOVIE}>
        {deleteMovie => (
          <button 
            onClick={() => this.deleteOnClick(deleteMovie)}
          >Delete</button>
        )}
      </Mutation>
    )
  }
}

export default DeleteMovie