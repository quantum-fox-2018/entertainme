import React, { Component } from 'react'
import List from './List'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './AddNewForm'

const moviesQuery = gql`{
  movies {
    _id
    title
    overview
  }
}`

class Home extends Component {
  render () {
    return (
      <Query query={ moviesQuery }>
       {({ loading, error, data }) => {
          if(loading) return <p>Loading...</p>;
          if(error) return <p>Error :(</p>;
          return (
          <div>
          <Form />
          <table>
            <thead>
              <td>Title</td>
              <td>Overview</td>
              <td>Action</td>
            </thead>
            {
              data.movies.map(d =>
                <List data={d}/>
              )
            }
          </table>
          </div>
          );
       }}
      </Query>
    );
  }
}

export default Home