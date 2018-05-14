import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const EDIT_MOVIE = gql`
    mutation editMovie($id: String, $title: String, $overview: String, $poster_path: String, $popularity: Int) {
      editMovie(id: $id, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity) {
        title
      }
    }
  `

export const EditMovie = (props) => {
  let inputTitle;
  let inputOverview;
  let inputPosterPath;
  let inputPopularity;
  
  return (
    <Mutation
      mutation={EDIT_MOVIE}
    >
      {editMovie => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              editMovie({ variables: { id: props.id, title: inputTitle.value, overview: inputOverview.value, poster_path: inputPosterPath.value, popularity: inputPopularity.value } });
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
                    value={props.movie.title}
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
                    value={props.movie.overview}
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
                    value={props.movie.poster_path}
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
                    value={props.movie.popularity}
                  />
                </th>
              </tr>
              <tr>
                <th></th>
                <th><button type="submit">Edit Movie</button></th>
              </tr>
            </table>
          </form>
        </div>
      )}
    </Mutation>
  );
};