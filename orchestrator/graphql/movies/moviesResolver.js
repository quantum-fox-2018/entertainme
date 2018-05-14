const axios = require('axios')

const moviesResolver = {
  Query: {
    movies: async () => {
      try {
        const movies = await axios.get('http://localhost:3001/api/movies')
        return movies.data.data
      } catch (error) {
        console.log(error)
      }
    },
    movie: async (_, { _id }) => {
      try {
        const movie = await axios.get(`http://localhost:3001/api/movies/${_id}`)
        return movie.data.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    addMovie: async (_, { title, popularity, overview, poster_path, status, tag }) => {
      try {
        let newMovie = {
          title,
          popularity,
          overview,
          poster_path,
          status,
          tag
        }
        const addMovie = await axios.post('http://localhost:3001/api/movies/add', newMovie)
        return addMovie.data.data
      } catch (error) {
        console.log(error)
      }
    },
    updateMovie: async (_, { _id, title, popularity, overview, poster_path, status, tag }) => {
      try {
        let newData = {
          title,
          popularity,
          overview,
          poster_path,
          status,
          tag
        }
        const updateMovie = await axios.put(`http://localhost:3001/api/movies/update/${_id}`, newData)
        return updateMovie.data.data
      } catch (error) {
        console.log(error)
      }
    },
    deleteMovie: async (_, { _id }) => {
      try {
        const deleteMovie = await axios.delete(`http://localhost:3001/api/movies/delete/${_id}`)
        console.log(deleteMovie.data.message)
        return {
          message: deleteMovie.data.message,
          deleteMovie
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

module.exports = moviesResolver