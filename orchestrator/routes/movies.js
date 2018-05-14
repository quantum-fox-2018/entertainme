const router = require('express').Router()
const { getMovies, addMovie,deleteMovie, editMovie, getMovieById } = require('../controllers/movies_controller')
const { getCacheMovies } = require('../middlewares/getCache')
 
router.get('/', getCacheMovies, getMovies)
router.get('/:id',  getMovieById)
router.post('/', addMovie)
router.put('/:id', editMovie)
router.delete('/:id', deleteMovie)

module.exports = router