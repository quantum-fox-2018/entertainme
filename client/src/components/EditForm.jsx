import React, { Component } from 'react'
import { EDIT_MOVIE } from '../graphql/querytype'
import './formMovie.css'
import { Mutation } from "react-apollo"

export default class EditMovie extends Component {

  constructor () {
    super()
    this.state = {
      title: '',
      overview: '',
      status: '',
      popularity: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  UNSAFE_componentWillMount () {
    this.setState({
      title: this.props.match.params.title,
      overview: this.props.match.params.overview,
      status: this.props.match.params.status,
      popularity: this.props.match.params.popularity
    })
  }
  render () {
    let getId = this.props.match.params.id
    return (
      <div>
        <h1> Edit Movie {this.props.match.params.title} </h1>
        <Mutation
          mutation={EDIT_MOVIE}
        >
          {editMovie => (
            <div id="editMovie">
              <form
                onSubmit={e => {
                  console.log(this.props)
                  e.preventDefault();
                  editMovie({ variables: { _id: getId, title: this.state.title, overview: this.state.overview, status: this.state.status, popularity: this.state.popularity } });
                  this.setState({
                    title: '',
                    overview: '',
                    status: ''
                  })
                  this.props.history.push('/')
                }}
              > 
                <label title="Title">Title : </label>
                <input
                  type="text"
                  onChange= { this.handleChange }
                  placeholder="Enter title"
                  value={this.state.title}
                  name="title"
                />
                <label title="Overview">Overview : </label>
                <input
                  type="text"
                  onChange= { this.handleChange }
                  placeholder="Enter overview"
                  value={this.state.overview}
                  name="overview"
                />
                <label title="Status">Status : </label>
                <input
                  type="text"
                  onChange= { this.handleChange }
                  placeholder="Enter status"
                  value={this.state.status}
                  name="status"
                />
                <label title="Popularity">Popularity : </label>
                <input
                  type="text"
                  onChange= { this.handleChange }
                  placeholder="Enter popularity"
                  value={this.state.popularity}
                  name="popularity"
                />
                <button type="submit">Edit Movie</button>
                <button type="button" id="cancelBtn" onClick={() => {
                  this.props.history.push('/')
                }}>Cancel</button>
              </form>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
  
};