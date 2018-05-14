import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const movieQuery = gql`
  query getMovieById ($id: String) {
    movie(id: $id) {
      title
      overview
    }
  }`

class Detail extends Component {
  render () {
    const id = this.props.match.params.id
    const action = this.props.match.params.action

    if (action === "view") {
      return (
        <Query query={movieQuery}
          variables={ {id} }
        >
        {({
          loading, error, data
        }) => {
          if (loading) return <div>loading ... </div>
          if (error) return <div>oops something wrong </div>
  
          return <div>
            <h1>{data.movie.title}</h1>
            <h3>Overview: {
              data.movie.overview
            }</h3>
            </div>
        }}
  
        </Query>
      )
    } else {
      return (
        <div>edit di sini</div>
      )
      
    }
   
  }
}

export default Detail