import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
      <div>
          <h1>Movies List!</h1>
        </div>
      <Query
        query={gql`
        {
          movies {
            _id
            title
            overview
		        poster_path
		        popularity
		        status
          } 
        }
        `}
      >
      {({loading, error, data}) => {
        // console.log("====",data)
        if(loading) return <h2>Loading data...</h2>;
        if(error) return <h2>something wrong!!!</h2>;
        return data.movies.map(({_id, title, poster_path})=>(
          <div className="container" key={_id}>
            <div className="list-group">
              <Link to={`/detailmovie/${_id}`} className="list-group-item list-group-item-action list-group-item-info">{title}</Link>
            </div>
          </div>
        ));
      }}
      </Query>
      </div>
    );
  }
}

export default Home;