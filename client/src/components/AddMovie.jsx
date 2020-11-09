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
      <div className="container">
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
              this.props.history.push('/')
            }}
            >
            <div class="form-group">
              <label>Title</label>
              <input class="form-control" placeholder="title" ref={node => { title = node; }}/>
            </div>
            <div class="form-group">
              <label>Overview</label>
              {/* <input class="form-control" placeholder="overview" ref={node => { overview = node; }}/> */}
              <textarea class="form-control" rows="3" ref={node => { overview = node; }}></textarea>
            </div>
            <div class="form-group">
              <label>Poster Path</label>
              <input class="form-control" placeholder="poster path.." ref={node => { poster_path = node; }}/>
            </div>
            <div class="form-group">
              <label>Popularity</label>
              <input class="form-control" placeholder="1" ref={node => { popularity = node; }}/>
            </div>
            <div class="form-group">
              <label>Status</label>
              <input class="form-control" placeholder="all ages" ref={node => { status = node; }}/>
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )}
        </Mutation>
      </div>
    );
  }
}

export default AddMovie;