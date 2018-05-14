import React, { Component } from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo"

const UPDATE_MOVIE = gql`
  mutation updateMovie($id: String, $title: String, $overview: String) {
    updateMovie(id: $id, title: $title, overview: $overview) {
      title,
      overview
    }
  }
`
const EditForm = (props) => {
  let inputTitle;
  let inputOverview;

  return (
    <Mutation mutation={UPDATE_MOVIE}>
      {updateMovie => (
        <div>
          <h1>Edit Form
          </h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              updateMovie({ 
                variables: {
                id: props.match.params.id,
                title: inputTitle.value,
                overview: inputOverview.value
                } 
              });
              inputTitle.value = "";
              inputOverview.value = "";
              props.history.push('/')
            }}
          >
            <input
              ref={node => {
                inputTitle = node;
              }}
              value={props.match.params.title}
            />
            <input
              ref={node => {
                inputOverview = node;
              }}
              value={props.match.params.overview}
            />

            <button type="submit">Edit Movie</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default EditForm