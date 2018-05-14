const axios = require('axios');

const movieResolvers = {
  Query: {
    movies: async () => {
      try {
        const movies = await axios.get('http://localhost:3001/movies');
        console.log('masuk', movies.data)
        return movies.data.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}

module.exports = movieResolvers;