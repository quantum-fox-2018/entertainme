const Movie = require('../models/movie')

module.exports = {
  readAllMovies: async function (req, res) {
    try {
      let movies = await Movie.find()
      res.status(200).json({
        message: 'movies found successfully',
        data: movies
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  readMovie: async function (req, res) {
    try {
      let movieId = req.params.id
      let movie = await Movie.findById(movieId)
      res.status(201).json({
        message: 'movie found successfully',
        data: movie
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  
  createMovie: async function (req, res) {
    try {
      let {title, overview, poster_path, popularity} = req.body
      let newMovie = await new Movie({title, overview, poster_path, popularity}).save()
      res.status(201).json({
        message: 'movies added successfully',
        data: newMovie
      }).populate('tags')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  deleteMovie: async function (req, res) {
    try {
      let movieId = req.params.id
      let movie = await Movie.findByIdAndRemove(movieId)
      res.status(201).json({
        message: 'movie delete successfully',
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  updateMovie: async function (req, res) {
    try {
      let movieId = req.params.id
      let movieUpdate = req.body
      let movie = await Movie.findByIdAndUpdate(movieId, movieUpdate)
      res.status(201).json({
        message: 'movie update successfully',
        data: movieUpdate
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
}