const Movie = require('../models/movies.model')

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      let movies = await Movie.find()
      res.send({
        message: 'get All Movie Success',
        status: 200,
        movies
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong'
      })
    }
  },
  addMovie: async (req, res) => {
    try {
      let newMovie = await Movie.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity
      })
      console.log('New Movie', newMovie)
      res.send({
        message: 'New Movie have been added',
        status: 200,
        movie: newMovie
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong'
      })
    }
  },
  updateMovie: async (req, res) => {
    try {
      let movieId = req.params.id
      let updatedMovie = await Movie.update(
        {_id: movieId},
        {
          $set: {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity
          }
        }
      )

      console.log('Update movie ===>', updatedMovie)
      res.send({
        message: `Movie with id ${movieId} Succesfully updated`,
        status: 200,
        updatedMovie
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong'
      })
    }
  },
  deleteMovie: async (req, res) => {
    try {
      let movieId = req.params.id
      let deletedMovie = await Movie.remove({_id: movieId})
      res.send({
        message: `Movie with id ${movieId} Succesfully deleted`,
        status: 200,
        deletedMovie
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong'
      })
    }
  }
}