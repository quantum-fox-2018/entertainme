import React, { Component } from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo"

const ADD_MOVIE = gql`
  mutation add_movie($title: String, $overview: String) {
    createMovie(title: $title, overview: $overview) {
      title,
      overview
    }
  }
`
export const formAdd = () => {
  let inputTitle;
  let inputOverview;

  return (
    <Mutation mutation={ADD_MOVIE}>
      {add_movie => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              add_movie({ 
                variables: { 
                title: inputTitle.value,
                overview: inputOverview.value
                } 
              });
              inputTitle.value = "";
              inputOverview.value = "";
            }}
          >
          <br />
            <input
              ref={node => {
                inputTitle = node;
              }}
              placeholder="add new title"
            /> <br />
            <input
              ref={node => {
                inputOverview = node;
              }}
              placeholder="add new overview"
            /> <br /> <br />

            <button type="submit">Add Movie</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default formAdd