const axios = require('axios');

const movieResolvers = {
  Query: {
    movies: async () => {
      try {
        const movies = await axios.get('http://localhost:3001/movies');
        return movies.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    movie: async (_, { id }) => {
      try {
        const movie = await axios.get('http://localhost:3001/movies/' + id); 
        return movie.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    newMovie: async(_, { title, overview, poster_path, popularity }) => {
      try {
        const newMovie = await axios.post('http://localhost:3001/movies/', {
          title, overview, poster_path, popularity
        })
        return newMovie.data.data
      } catch (err) {
        console.log(err)
      }
    },
    editMovie: async(_, { id, title, overview, poster_path, popularity }) => {
      try {
        const editMovie = await axios.put('http://localhost:3001/movies/' + id, {
          title, overview, poster_path, popularity
        })
        return editMovie.data.data
      } catch (err) {
        console.log(err)
      }
    },
    removeMovie: async(_, { id }) => {
      try {
        const removeMovie = await axios.delete('http://localhost:3001/movies/' + id)
        return removeMovie.data.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}

module.exports = movieResolvers;