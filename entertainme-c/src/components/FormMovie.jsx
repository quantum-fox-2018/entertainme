import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_MOVIE = gql`
    mutation newMovie($title: String, $overview: String, $poster_path: String, $popularity: Int) {
      newMovie(title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity) {
        title
      }
    }
  `

export const AddMovie = () => {
  let inputTitle;
  let inputOverview;
  let inputPosterPath;
  let inputPopularity;

  return (
    <Mutation
      mutation={ADD_MOVIE}
    >
      {newMovie => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              newMovie({ variables: { title: inputTitle.value, overview: inputOverview.value, poster_path: inputPosterPath.value, popularity: inputPopularity.value } });
              inputTitle.value = "";
              inputOverview.value = "";
              inputPosterPath.value = "";
              inputPopularity.value = "";
            }}
          >
            <table>
              <tr>
                <th>Title</th>
                <th>
                  <input
                    ref={node => {
                      inputTitle = node;
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>Overview</th>
                <th>
                  <input
                    ref={node => {
                      inputOverview = node;
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>Poster Path</th>
                <th>
                  <input
                    ref={node => {
                      inputPosterPath = node;
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>Popularity</th>
                <th>
                  <input
                    ref={node => {
                      inputPopularity = node;
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th></th>
                <th><button type="submit">Add Movie</button></th>
              </tr>
            </table>
          </form>
          <hr/>
        </div>
      )}
    </Mutation>
  );
};