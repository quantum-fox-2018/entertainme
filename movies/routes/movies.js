var express = require('express');
var router = express.Router();
const {getMovies, addMovies, updateMovie, removeMovie, getMovieById} = require('../controllers/movies.controller')

router.get('/', getMovies)
router.post('/',addMovies)
router.put('/:id', updateMovie)
router.delete('/:id', removeMovie)
router.get('/:id', getMovieById)

module.exports = router;
