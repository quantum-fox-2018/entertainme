import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { doTypesOverlap } from 'graphql';


const MOVIE_BY_ID = gql`
  query moviesById($_id: String) {
    moviesById(_id:$_id) {
      title
      overview
      poster_path
      popularity
      status
    }
  }
`

class DetailMovies extends Component {
  render() {
    console.log(this.props.match.params)
    return (
      <div>
        <h1>Detail Movies</h1>
        <hr/>
        <Query query={MOVIE_BY_ID} variables={{_id:this.props.match.params.id}}>
          {({loading, error, data}) => {
            console.log('ini===', data)
          if(loading) return <h2>Loading data...</h2>;
          if(error) return <h2>something wrong!!!</h2>;
          return (
            <div className="card mb-3 container">
              <img className="card-img-top" src={data.moviesById.poster_path} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{data.moviesById.title}</h5>
                <p className="card-text">{data.moviesById.overview}</p>
                <p className="card-text"><small className="text-muted">Rating: {data.moviesById.popularity} | status: {data.moviesById.status}</small></p>
              </div>
            </div>
          );
        }}
        </Query>
      </div>
    );
  }
}

export default DetailMovies;