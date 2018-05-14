import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import '../App.css';

const UPDATE_MOVIE = gql`
  mutation updateMovie($id: String, $title: String!, $popularity: String, $poster_path: String, $overview: String) {
    updateMovie(_id: $id, title: $title, popularity: $popularity, poster_path: $poster_path, overview: $overview) {
      _id
      title
      popularity
      overview
      poster_path
      status
      tag
    }
  }
`

class UpdateMovie extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      popularity: '',
      overview: ''
    }
  }

  componentDidMount() {
    const movie = this.props.location.query.movie

    this.setState({
      title: movie.title,
      popularity: movie.popularity,
      overview: movie.overview
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e, updateMovie) => {
    e.preventDefault()
    updateMovie({
      variables: {
        id: this.props.location.query.movie._id,
        title: this.state.title,
        popularity: this.state.popularity,
        overview: this.state.overview
      }
    })
    alert('Update data success!')
    this.props.history.push('/')
  }

  render() {
    return (
      <Mutation mutation={ UPDATE_MOVIE }>
        {
          updateMovie => (
            <div className="formEdit">
              <h1 style={{textAlign: 'center'}}>Edit Data</h1>
              <form onSubmit={ (e) => this.handleSubmit(e, updateMovie) }>
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  id="editTitle"
                  value={ this.state.title }
                  onChange={ this.handleChange }
                />
                <label>Popularity</label>
                <input
                  type="text"
                  name="popularity"
                  id="editPopularity"
                  value={ this.state.popularity }
                  onChange={ this.handleChange }
                />
                <label>Overview</label>
                <input
                  type="text"
                  name="overview"
                  id="editOverview"
                  value={ this.state.overview }
                  onChange={ this.handleChange }
                />

                <div style={{textAlign: 'center', marginTop: 10}}>
                  <button onClick={() => {this.props.history.push('/')}} className="btn btn-danger">Back</button>
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

export default UpdateMovie;