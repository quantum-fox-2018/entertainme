import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { ADD_NEW_MOVIE } from '../../graphql/queryType'

class AddMovie extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      overview: '',
      poster_path: '',
      popularity: 0
    }
  }

  handleSubmit = (e, addNewMovie) => {
    e.preventDefault()
    addNewMovie({
      variables: {
        title: this.state.title,
        overview: this.state.overview,
        poster_path: this.state.poster_path,
        popularity: this.state.popularity
      }
    })
    this.resetState()
    window.location.reload()
  }

  resetState = () => {
    this.setState({
      title: '',
      overview: '',
      poster_path: '',
      popularity: 0
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add New Movies</h2>
        <Mutation mutation={ADD_NEW_MOVIE}>
          {addNewMovie => (
            <form onSubmit={(e) => this.handleSubmit(e, addNewMovie)}>
              <label htmlFor="title">Title :</label>
              <input 
                type="text" name="title" 
                id="title" value={this.state.title}
                onChange={this.handleChange}
              /><br /><br />
              <label htmlFor="overview">Overview :</label>
              <input 
                type="text" name="overview" 
                id="overview" value={this.state.overview}
                onChange={this.handleChange}
              /><br /><br />
              <label htmlFor="poster_path">Poster Path :</label>
              <input 
                type="text" name="poster_path" 
                id="poster_path" value={this.state.poster_path}
                onChange={this.handleChange}
              /><br /><br />
              <label htmlFor="popularity">Popularity :</label>
              <input 
                type="text" name="popularity" 
                id="popularity" value={this.state.popularity}
                onChange={this.handleChange}
              /><br /><br />
              <button type="submit">Add Movie</button>
            </form>
          )}
        </Mutation>
      </div>
    )
  }
}

export default AddMovie