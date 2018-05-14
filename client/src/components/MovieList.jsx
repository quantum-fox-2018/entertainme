import React, {Component} from 'react'
import Movie from './Movie.jsx'
import Form from './Form.jsx'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import './Movie.css'


class MovieList extends Component {  
  componentDidMount(){
    
  }


  render () {
      return (
        <div>
          <Form className='flex-frame'></Form>          
          <div className="container">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Overview</th>
                <th scope="col">Popularity</th>
                <th scope="col">Poster_Path</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <Query 
            query={gql`{
              movies{
                _id
                title
                overview
                poster_path
                popularity
                }
              }`
            }
            >
            {({ loading, error, data }) => {
              if (loading) return <tbody><tr><td>Loading...</td></tr></tbody>;
              if (error) return <tbody><tr><td>Error...</td></tr></tbody>;
              return data.movies.map((movie, index) => (
                <Movie data={movie} key={index}/>)
              )
            }}
            </Query>
          </table>
          </div>
        </div>
      )
  } 
}


export default MovieList