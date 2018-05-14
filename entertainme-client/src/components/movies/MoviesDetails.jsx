import React, { Component } from 'react'
import { GET_ONE_MOVIE } from '../../graphql/queryType'
import { Query } from 'react-apollo'

class MoviesDetails extends Component {
  render() {
    const movieId = this.props.match.params.id
    console.log('Movie Id ===>', movieId)
    return (
      <Query query={ GET_ONE_MOVIE } variables={{id: movieId}} >
        {({ loading, error, data }) => {
          if (loading) return <h4>Working on it</h4>
          if (loading) return <h4>Something went wrong...</h4>
          console.log('Details', this.props)
          return (
            <div>
              <button onClick={() => this.props.history.goBack()} > Back</button>
              <h2>{ data.movie.title }</h2>
              <h4>Overview : { data.movie.overview }</h4>
              <h4>Popularity : { data.movie.popularity }</h4>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default MoviesDetails