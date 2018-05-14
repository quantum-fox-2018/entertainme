const express = require('express')
const router = express.Router()
const {
  getAllMovies, addMovie, 
  updateMovie, deleteMovie,
  addMovieTag, getMovieById
} = require('../controllers/movies.controller.js')

/* GET users listing. */
router.get('/', getAllMovies)
      .get('/:id', getMovieById)
      .post('/', addMovie)
      .put('/:id', updateMovie)
      .put('/:id/AddTag', addMovieTag)
      .delete('/:id', deleteMovie)

module.exports = router
