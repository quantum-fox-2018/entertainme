import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import './Movie.css'

const DELETE_MOVIE = gql`
  mutation deleteMovie($id: String) {
    deleteMovie(id:$id) {
    }
  }
`

class Movie extends Component {

  delete (payload) {
    this.props.removePassword(payload)
  }

  render() {
    return (
      
        <tr key={ this.props.data.key }>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.overview}</td>
        <td>{this.props.data.poster_path}</td>
        <td>{this.props.data.popularity}</td>
        <td>
            <Link to={`/${this.props.data._id}`}>
              <button className="btn btn-primary button">
                Detail
              </button>
            </Link>
            <Mutation mutation={DELETE_MOVIE}>
              <button className='btn btn-primary' onClick={ () => {
                deleteMovie({ variables: { id:this.props.data._id }})
                }}>Delete</button>
            </Mutation>
        </td>
        </tr>
      
    );
  }
}



export default Movie