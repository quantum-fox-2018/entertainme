const axios = require('axios')

module.exports = {
  Query : {
    movies: async () => {
      try {
        let movies = await axios({
          method: 'get',
          url: 'http://localhost:3001/movies'
        })
        // console.log('movieess==='. movies.data.data)
        return movies.data.data
      } catch (error) {
        console.log(error)
        return error
      }
    },
    moviesById: async (_,{_id}) => {
      try {
        let movies = await axios({
          method: 'get',
          url: `http://localhost:3001/movies/${_id}`
        })
        return movies.data.data
      } catch (error) {
        return error
      }
    }
  },
  Mutation: {
    addNewMovie: async (_, input) => {
      try {
        let movies = await axios({
          method: 'post',
          url: 'http://localhost:3001/movies',
          data: input
        })
        return movies.data.data
      } catch (error) {
        return error
      }
    },
    deleteMovie: async (_,{_id}) => {
      try {
        let delMovie = await axios({
          method: 'delete',
          url: `http://localhost:3001/movies/${_id}`
        })
        return delMovie.data
      } catch (error) {
        return error
      }
    }
  }
}