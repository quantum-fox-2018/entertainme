import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_MOVIE = gql`
  mutation createMovie($title: String, $overview: String, $poster_path:String, $popularity:Int) {
    createMovie(title: $title, overview: $overview,poster_path: $poster_path, popularity: $popularity) {
      title
      overview
      poster_path
      popularity
    }
  }
`


class Form extends Component {

  refresh () {
    window.location.reload()
  }

  render () {
    let title;
    let overview;
    let poster_path;
    let popularity;
    return (
      <Mutation mutation={ADD_MOVIE}>
        {createMovie => (
          <div className="container col-md-5">
          <form onSubmit = { e => {
            e.preventDefault();
            createMovie({ variables: { title: title.value,overview: overview.value,poster_path: poster_path.value,popularity: popularity.value, } });
            title.value = "";
            overview.value = "";
            poster_path.value = "";
            popularity.value = "";
            this.refresh()
          }}> 
          <fieldset>
            <h1><strong>Movie Form</strong></h1>
              <div className="form-group">
                <label htmlFor="inputUrl">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUrl"
                  placeholder="Enter Title"
                  name="title"
                  ref={node => { title = node; }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputOverview">OverView</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputOverview"
                  placeholder="Enter Overview"
                  name="overview"
                  ref={node => { overview = node; }}/>
              </div>
              <div className="form-group">
                <label htmlFor="inputPopularity">Popularity</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPopularity"
                  placeholder="Enter Popularity Rating"
                  name="popularity"
                  ref={node => { popularity = node; }}  
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPosterPath">Poster_Path</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPosterPath"
                  placeholder="Enter Poster_Path"
                  name="password"
                  ref={node => { poster_path = node; }}
                />
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset> 
        </form>
        </div>
        )}
      </Mutation>
      
    )
  }
}



export default Form