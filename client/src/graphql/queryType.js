import gql from 'graphql-tag'

export const GET_ALL_MOVIES = gql `
  {
    movies {
      _id
      title
      overview
      poster_path
      popularity
    }
  }
`

export const GET_ONE_MOVIE = gql `
  query GetOneMovie($id: String) {
    movie(_id: $id) {
      title
      overview
      popularity
    }
  }
`

export const ADD_NEW_MOVIE = gql `
  mutation addNewMovie($title: String, $overview: String, $poster_path: String, $popularity: Float) {
    addMovie(title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity) {
      _id
      title
      overview
      poster_path
      popularity
    }
  }
`

export const UPDATE_MOVIE = gql `
  mutation UpdatingOneMovie($_id: String, $title: String, $overview: String, $poster_path: String, $popularity: Float) {
    updateMovie(_id: $_id, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity){
      _id
      title
      overview
      poster_path
      popularity
    }
  }
`
export const DELETE_MOVIE = gql `
  mutation DeletingOneMovie($id: String) {
    deleteMovie(_id: $id) {
      info
    }
  }
`