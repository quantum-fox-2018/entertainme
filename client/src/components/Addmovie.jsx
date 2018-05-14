import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'


const ADD_MOVIE = gql`
mutation addmovies($title: String, $overview: String, $poster_path:String, $popularity:Int) {
  addMovie(title: $title, overview: $overview,poster_path: $poster_path, popularity: $popularity) {
    title
    overview
    poster_path
    popularity
  }
}
`;
class Detail extends Component {

  render() {
    const id = this.props.match.params.id
    let title;
    let overview;
    let poster_path;
    let popularity;
    return (
      <div>
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
              <input ref={node => { title = node; }}/>
              <input ref={node => { overview = node; }}/>
              <input ref={node => { poster_path = node; }}/>
              <input ref={node => { popularity = node; }}/>
                <button type="submit">Add Movie</button>
              </form>
            </div>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Detail;
