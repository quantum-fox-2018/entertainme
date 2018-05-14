import React from 'react'
import { ADD_MOVIE } from '../graphql/querytype'
import { Mutation } from "react-apollo"

export const AddMovie = () => {
  let inputTitle;
  let inputOverview;
  let inputStatus

  return (
    <Mutation
      mutation={ADD_MOVIE}
    >
      {addMovie => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addMovie({ variables: { title: inputTitle.value, overview: inputOverview.value, status: inputStatus.value } });
              inputTitle.value = "";
              inputOverview.value = "";
              inputStatus.value = "";
            }}
          >
            <input
              ref={node => {
                inputTitle = node;
              }}
            />
            <input
              ref={node => {
                inputOverview = node;
              }}
            />
            <input
              ref={node => {
                inputStatus = node;
              }}
            />
            <button type="submit">Add Movie</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};