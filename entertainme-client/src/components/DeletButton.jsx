import React, { Component } from 'react'
import { Mutation } from "react-apollo"
import gql from "graphql-tag";

const DELETE_MOVIE = gql`
  mutation removeMovie($id: String) {
    removeMovie(id: $id) {
      title
    }
  }`
export default class DeleteMovie extends Component {

  render () {
    const getId = this.props.id
    return (
      <Mutation
        mutation={DELETE_MOVIE}
      >
      
        {
          removeMovie => (
          <button type="button" 
            onClick={ () =>
            removeMovie({ variables: { id: getId} })
        }>
        DELETE
        </button>
        )}
      </Mutation>
    );
  }
}