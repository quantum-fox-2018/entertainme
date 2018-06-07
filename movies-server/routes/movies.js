const express = require('express');
const router = express.Router();

const { readAllMovies, createMovie, readMovie, updateMovie, deleteMovie } = require('../controllers/movie')

/* GET users listing. */
router.get('/', readAllMovies);
router.get('/:id', readMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
