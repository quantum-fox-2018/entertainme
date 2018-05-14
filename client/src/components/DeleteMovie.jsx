import React, { Component } from 'react'
import { DELETE_MOVIE } from '../graphql/querytype'
import { Mutation } from "react-apollo"

export default class DeleteMovie extends Component {

  render () {
    const getId = this.props.id
    return (
      <Mutation
        mutation={DELETE_MOVIE}
      >
      
        {deleteMovie => (
          <button type="button" 
                  onClick={ () =>
                    deleteMovie({ variables: { _id: getId} })
                  }
          >DELETE</button>
        )}
      </Mutation>
    );
  }
}