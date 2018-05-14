import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import '../App.css';

const LOAD_MOVIE_BY_ID = gql`
  query movieById($id: String) {
    movie(_id: $id) {
      _id
      title
      overview
      popularity
      poster_path
      status
    }
  }
`

class DetailMovie extends Component {
  render() {
    const id = this.props.match.params.id

    return (
      <Query query={ LOAD_MOVIE_BY_ID } variables={{ id }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Oops, something wrong</p>

            return (
              <div className="detailMovie">
                <h1>{ data.movie.title }</h1>
                <p>Rating: { data.movie.popularity } / 10</p>
                <p>Overview: { data.movie.overview }</p>
                <div style={{textAlign: 'center', marginTop: 10}}>
                  <button
                    onClick={() => {this.props.history.push('/')}}
                    className="btn btn-danger"
                  >Back</button>
                </div>
              </div>
            )
          }
        }
      </Query>
    );
  }
}

export default DetailMovie;