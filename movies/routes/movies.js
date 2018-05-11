const router = require('express').Router()
const { getMovies, addMovie, editMovie, deleteMovie } = require('../controllers/movie_controller')

router.get('/', getMovies)
router.post('/', addMovie)
router.put('/:id', editMovie)
router.delete('/:id', deleteMovie)

module.exports = router