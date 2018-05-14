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
        let movies = await axios.get(`http://localhost:3001/movies/${_id}`)
        if (movies) {
          return movies.data.data
        }
      } catch (error) {
        return error
      }
    }
  }
} 