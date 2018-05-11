var express = require('express');
var router = express.Router();
const {getMovies, addMovies, updateMovie, removeMovie} = require('../controllers/movies.controller')

router.get('/', getMovies)
router.post('/',addMovies)
router.put('/:id', updateMovie)
router.delete('/:id', removeMovie)

module.exports = router;
