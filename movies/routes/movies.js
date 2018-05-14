const router = require('express').Router()
const { getMovies, addMovie, editMovie, deleteMovie, getMovieById } = require('../controllers/movie_controller')

router.get('/', getMovies)
router.get('/:id', getMovieById)
router.post('/', addMovie)
router.put('/:id', editMovie)
router.delete('/:id', deleteMovie)

module.exports = router