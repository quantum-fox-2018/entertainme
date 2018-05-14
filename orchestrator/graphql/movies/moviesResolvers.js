const axios = require('axios')

const movieResolvers = {
  Query: {
    movies: async () => {
      try {
        let moviesData = await axios.get('http://localhost:3000/movies')
        return moviesData.data.data.data
      } catch (error) {
        console.log(error)
      }
    },
    movie: async (_, {_id}) => {
      try {
        let moviesData = await axios.get('http://localhost:3000/movies/'+ _id)
        return moviesData.data.data.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    newMovie: async (_, {title, overview, status, popularity}) => {
      try {
        let newMovie = await axios.post('http://localhost:3000/movies/', {
          title,
          overview,
          status,
          popularity
        }, {})
        return newMovie.data.data
      } catch (error) {
        console.log(error)
      }
    },
    deleteMovie: async (_, {_id}) => {
      try {
        await axios.delete('http://localhost:3000/movies/' + _id)
        return {
          text: 'delete berhasil'
        }
      } catch (error) {
        console.log('error')
      }
    },
    editMovie: async (_, {_id, title, overview, status, popularity}) => {
      try {
        await axios.put('http://localhost:3000/movies/' + _id, {
          title,
          overview,
          status,
          popularity
        })
        return {
          text: 'update berhasil'
        }
      } catch (error) {
        console.log('error')
      }
    }
  }
}

module.exports = movieResolvers