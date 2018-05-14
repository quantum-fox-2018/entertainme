const axios = require('axios')

module.exports = {
  Query: {
    movies: async () => {
      try {
        let movies = await axios.get('http://localhost:3001/movies')
        return movies.data.data
      } catch (error) {
        return error
      }
    },
    movieById: async (_, {_id}) => {
      try {
        let movie = await axios.get(`http://localhost:3001/movies/${_id}`)  
        return movie.data.data
      } catch (error) {
        return error
      }
    }
  },
  Mutation: {
    addMovie: async (_, data) => {
      try {
        let movie = await axios.post(`http://localhost:3001/movies`, data)
        return movie.data.data    
      } catch (error) {
        return error
      }
    },
    delMovie: async (_, {_id}) => {
      try {
        let movie = await axios.delete(`http://localhost:3001/movies/${_id}`)
        return {message: 'Delete success!'}
      } catch (error) {
        return error
      }
    }
  }
} 