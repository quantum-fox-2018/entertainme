import React, { Component } from 'react'
import { GET_DETAIL_MOVIE } from '../graphql/querytype'
import { Query } from "react-apollo"

class DetailMovie extends Component {

  render() {
    const getId = this.props.match.params.id
    return (
      <Query query={ GET_DETAIL_MOVIE } variables={{id: getId}}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <div>
                <h1> title: { data.movie.title } </h1>
                <h1> status: { data.movie.status }</h1>
              </div>
            )
          }}
      </Query>
    );
  }
}

export default DetailMovie