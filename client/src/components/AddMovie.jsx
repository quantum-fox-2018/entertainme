import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import '../App.css';

const ADD_MOVIE = gql`
  mutation addNewMovie($title: String!, $popularity: String, $poster_path: String, $overview: String) {
    addMovie(title: $title, popularity: $popularity, poster_path: $poster_path, overview: $overview) {
      title
      popularity
      overview
      poster_path
      status
      tag
    }
  }
`

class AddMovie extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      popularity: '',
      overview: ''
    }
  }

  clearState = () => {
    this.setState({
      title: '',
      popularity: '',
      overview: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, addNewMovie) => {
    e.preventDefault()
    addNewMovie({
      variables: {
        title: this.state.title,
        popularity: this.state.popularity,
        overview: this.state.overview
      }
    })
    this.clearState()
    alert('Add data success!')
    window.location.reload()
  }

  render() {
    return (
      <Mutation mutation={ ADD_MOVIE }>
        {
          addNewMovie => (
            <div className="formAdd" >
              <h1 style={{textAlign: 'center'}}>Add Data</h1>
              <form onSubmit={ (e) => this.handleSubmit(e, addNewMovie) }>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  id="movieTitle"
                  value={ this.state.title }
                  onChange={ this.handleChange }
                />
                <label>Popularity</label>
                <input
                  type="text"
                  name="popularity"
                  id="moviePopularity"
                  value={ this.state.popularity }
                  onChange={ this.handleChange }
                />
                <label>Overview</label>
                <input
                  type="text"
                  name="overview"
                  id="movieOverview"
                  value={ this.state.overview }
                  onChange={ this.handleChange }
                />

                <div style={{textAlign: 'center', marginTop: 10}}>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          )
        }
      </Mutation>
    );
  }
}

export default AddMovie;