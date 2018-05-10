const express = require('express');
const router = express.Router();
const {
  getAllMovies, addMovie, updateMovie, deleteMovie
} = require('../controllers/movies.controller.js')

/* GET users listing. */
router.get('/', getAllMovies)
      .post('/', addMovie)
      .put('/:id', updateMovie)
      .delete('/:id', deleteMovie)

module.exports = router;
