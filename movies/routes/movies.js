const express = require('express')
const router = express.Router()
const {
  getAllMovies, addMovie, 
  updateMovie, deleteMovie,
  addMovieTag
} = require('../controllers/movies.controller.js')

/* GET users listing. */
router.get('/', getAllMovies)
      .post('/', addMovie)
      .put('/:id', updateMovie)
      .put('/:id/AddTag', addMovieTag)
      .delete('/:id', deleteMovie)

module.exports = router
