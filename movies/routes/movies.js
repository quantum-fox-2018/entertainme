const router = require('express').Router()
const { getMovies, addMovie } = require('../controllers/movie_controller')

router.get('/', getMovies)
router.post('/', addMovie)

module.exports = router