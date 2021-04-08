import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_MOVIE = gql`
mutation addmovies($title: String, $overview: String, $poster_path:String, $popularity:String) {
  addMovie(title: $title, overview: $overview,poster_path: $poster_path, popularity: $popularity) {
    title
    overview
    poster_path
    popularity
  }
}
`;
class Add extends Component {

  render() {
    let title;
    let overview;
    let poster_path;
    let popularity;
    return (
      <div>
        <br/>
        <Mutation mutation={ADD_MOVIE}>
          {addmovies => (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  addmovies({ variables: { title: title.value,overview: overview.value,poster_path: poster_path.value,popularity: popularity.value, } });
                  title.value = "";
                  overview.value = "";
                  poster_path.value = "";
                  popularity.value = "";
                }}
              >
              <input placeholder="title" ref={node => { title = node; }}/>
              <input placeholder="overview" ref={node => { overview = node; }}/>
              <input placeholder="poster_path" ref={node => { poster_path = node; }}/>
              <input placeholder="popularity" ref={node => { popularity = node; }}/>
                <button type="submit">Add Movie</button>
              </form>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Add;