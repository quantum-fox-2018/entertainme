var express = require('express');
var router = express.Router();
var ctMovie = require('../controllers/Movies.controller')

router.get('/', ctMovie.getAllMovies)
router.post('/', ctMovie.createMovie)

module.exports = router;
