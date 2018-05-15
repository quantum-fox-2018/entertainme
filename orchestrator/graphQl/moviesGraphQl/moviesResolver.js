const axios = require('axios')

const movieResolver = {
  Query: {
    movies: async () => {
      try {
        const movie = await axios.get('http://localhost:3001/movie')
        return movie.data.data
      } catch (error) {
      }
    },

    movie: async (_, {_id}) => {
      try {
        const movie = await axios.get('http://localhost:3001/movie/' + _id)
        return movie.data.data
      } catch (error) {
        console.log(error)
      }
    } 
  },
  Mutation: {
    addMovie: async (_, {title, overview, poster_path, popularity}) => {
      try {
        const addedMovie = await axios.post('http://localhost:3001/movie', {
          title, overview, poster_path, popularity
        })
        return addedMovie.data.data
      } catch (error) {
        console.log(error)
      }
    },
    updateMovie: async (_, {_id, title, overview, poster_path, popularity}) => {
      try {
        const updatedMovie = await axios.put('http://localhost:3001/movie/' + _id, {
          title, overview, poster_path, popularity
        })
        return updatedMovie.data.data
      } catch (error) {
        console.log(error)
      }
    },
    deleteMovie: async (_, {_id}) => {
      try {
        const deletedMovie = await axios.delete('http://localhost:3001/movie/'+_id)
        return {info: 'delete Success'}
      } catch (error) {
        console.log(error)
      }
    }
  }
}

module.exports = movieResolver