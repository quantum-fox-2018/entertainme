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
  mutation newMovieAdded($title: String, $overview: String, $status: String) {
    newMovie(title: $title, overview: $overview, status: $status) {
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