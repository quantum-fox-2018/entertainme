const Movie = require('../models/movies.model')

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      let movies = await Movie.find().populate('tag')
      res.send({
        message: 'get All Movie Success',
        status: 200,
        data: movies
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  addMovie: async (req, res) => {
    try {
      let newMovie = await Movie.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag
      })
      console.log('New Movie', newMovie)
      res.send({
        message: 'New Movie have been added',
        status: 200,
        data: newMovie
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  addMovieTag: async (req, res) => {
    try {
      let movieId = re.params.id
      let addedMovieTag = await Movie.update(
        {_id: movieId},
        {$addToSet: {tag: req.body.tag}}
      )
      res.send({
        message: `Tag has been added to Movie`,
        status: 200,
        addedMovieTag
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
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
        message: 'Something went wrong',
        status: 500
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
        message: 'Something went wrong',
        status: 500
      })
    }
  }
}