import React from 'react'
import { ADD_MOVIE } from '../graphql/querytype'
import './formMovie.css'
import { Mutation } from "react-apollo"

export const AddMovie = () => {
  let inputTitle;
  let inputOverview;
  let inputStatus
  let inputPopularity

  return (
    <Mutation
      mutation={ADD_MOVIE}
    >
      {addMovie => (
        <div id="addMovie">
          <form
            onSubmit={e => {
              e.preventDefault();
              addMovie({ variables: { title: inputTitle.value, overview: inputOverview.value, status: inputStatus.value, popularity: inputPopularity.value } });
              inputTitle.value = "";
              inputOverview.value = "";
              inputStatus.value = "";
              inputPopularity.value=""
              window.location.reload()
            }}
          >
            <label title="Title">Title : </label>
            <input
              type="text"
              ref={node => {
                inputTitle = node;
              }}
              placeholder="Enter title"
            />
            <label title="Overview">Overview : </label>
            <input
              type="text"
              ref={node => {
                inputOverview = node;
              }}
              placeholder="Enter overview"
            />
            <label title="Status">Status : </label>
            <input
              type="text"
              ref={node => {
                inputStatus = node;
              }}
              placeholder="Enter status"
            />
            <label title="Popularty">Popularty : </label>
            <input
              type="text"
              ref={node => {
                inputPopularity = node;
              }}
              placeholder="Enter popularity"
            />
            <button type="submit">Add Movie</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};