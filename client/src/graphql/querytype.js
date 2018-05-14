import gql from "graphql-tag"

export const GET_ALL_MOVIES_QUERY = gql`
  {
    movies {
      _id
      title
      poster_path
      overview
      popularity
      status
    }
  }
`

export const GET_DETAIL_MOVIE = gql`
  query GetMovie($id: String) {
    movie(_id: $id) {
      title
      overview
      status
      popularity
    }
  }
`

export const ADD_MOVIE = gql`
  mutation newMovieAdded($title: String, $overview: String, $status: String, $popularity: Int) {
    newMovie(title: $title, overview: $overview, status: $status, popularity: $popularity) {
      title
      overview
      status
    }
  }
`

export const DELETE_MOVIE = gql`
  mutation deleteMovieData($_id: String) {
    deleteMovie(_id: $_id) {
      text
    } 
  }
`

export const EDIT_MOVIE = gql`
  mutation editMovieData($_id: String, $title: String, $overview: String, $status: String, $popularity: Int) {
    editMovie(_id: $_id, title: $title, overview: $overview, status: $status, popularity: $popularity) {
      text
    } 
  }
`