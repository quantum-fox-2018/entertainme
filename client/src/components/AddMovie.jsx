import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const ADD_MOVIE = gql`
  mutation addNewMovie($title: String, $overview:String, $poster_path:String,$popularity:Int, $status:String) {
    addNewMovie(title: $title,overview: $overview, poster_path: $poster_path,popularity: $popularity, status: $status) {
      title
      overview
      poster_path
      popularity
      status
    }
  }
`;

class AddMovie extends Component {
  render() {
    let title, overview, poster_path, popularity, status
    return (
      <div>
        <h1>Add new movie</h1>
        <hr/>
        <Mutation mutation={ADD_MOVIE}>
        {addNewMovie => (
          <div>
            <form
            onSubmit={e=>{
              e.preventDefault()
              addNewMovie({variables:{title: title.value,overview: overview.value, poster_path: poster_path.value,popularity: popularity.value, status: status.value}})
              title.value = ""
              overview.value= ""
              poster_path.value = ""
              popularity.value =""
              status.value = ""
            }}
            >
              <input placeholder="title" ref={node => { title = node; }}/>
              <input placeholder="overview" ref={node => { overview = node; }}/>
              <input placeholder="poster path.." ref={node => { poster_path = node; }}/>
              <input placeholder="1" ref={node => { popularity = node; }}/>
              <input placeholder="all ages" ref={node => { status = node; }}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        </Mutation>
      </div>
    );
  }
}

export default AddMovie;