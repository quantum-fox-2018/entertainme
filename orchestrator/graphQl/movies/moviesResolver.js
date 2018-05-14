const axios = require('axios')

const moviesResolver = {
  Query: {
    movies: async () => {
      try {
        const movies = await axios.get('http://localhost:3001/movie')
        return movies.data.data
      } catch (error) {
        console.log('Get Error ===>', error)
      }
    },
    movie: async (_, {_id}) => {
      try {
        const movie = await axios.get('http://localhost:3001/movie/'+_id)
        return movie.data.data
      } catch (error) {
        console.log('Get Error ===>', error)
      }
    }
  },
  Mutation: {
    addMovie: async (_, {title, overview, poster_path, popularity}) => {
      try {
        const addedMovie = await axios.post('http://localhost:3001/movie',{
          title, overview, poster_path, popularity
        })
        console.log(addedMovie.data)
        return addedMovie.data.data
      } catch (error) {
        console.log('Post Error ===>', error)
      }
    },
    updateMovie: async (_, {_id, title, overview, poster_path, popularity}) => {
      try {
        const updatedMovie = await axios.put('http://localhost:3001/movie/'+_id,{
          title, overview, poster_path, popularity
        })
        console.log(updatedMovie.data)
        return updatedMovie.data.data
      } catch (error) {
        console.log('Post Error ===>', error)
      }
    },
    deleteMovie: async(_, {_id}) => {
      try {
        const deletedMovie = await axios.delete('http://localhost:3001/movie/'+_id)
        console.log(deletedMovie)
        return deletedMovie
      } catch (error) {
        console.log('Post Error ===>', error)
      }
    }
  }
} 

module.exports = moviesResolver
