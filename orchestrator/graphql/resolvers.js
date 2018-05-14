
const axios = require('axios')
module.exports = {
  Query: {
    movies: async () => {
      try {
        let movies = await axios.get('http://localhost:3001/movies')
        console.log(movies.data.movie[0])
        return movies.data.movie
      } catch (err) {
        console.log(err)
        return err
      }
    },
    movieById: async (_, {_id}) => {
      try {
        console.log(_id)
        let movies = await axios.get(`http://localhost:3001/movies/${_id}`)
        if (movies) {
          console.log(movies.data.movie)
          return movies.data.movie
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  Mutation: {
    addMovie: async (_, data) => {
      try {
        let movies = await axios.post(`http://localhost:3001/movies`, data)
        if (movies) {
          console.log(movies.data.addMovie)
          return movies.data.addMovie
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
