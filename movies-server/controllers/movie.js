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
  }
}