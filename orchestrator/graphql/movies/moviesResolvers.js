const axios = require('axios')

const movieResolvers = {
  Query: {
    movies: async () => {
      try {
        let moviesData = await axios.get('http://localhost:3000/movies')
        return moviesData.data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}

module.exports = movieResolvers