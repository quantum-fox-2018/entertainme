var express = require('express');
var router = express.Router();
var ctMovie = require('../controllers/Movies.controller')

router.get('/', ctMovie.getAllMovies)
router.get('/:id', ctMovie.getMovieById)
router.post('/', ctMovie.createMovie)
router.put('/:id', ctMovie.updateMovie)
router.delete('/:id', ctMovie.deleteMovie)

module.exports = router;
