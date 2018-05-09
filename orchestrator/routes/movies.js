const router = require('express').Router()
const { getMovies } = require('../controllers/movies_controller')
const { getCacheMovies } = require('../middlewares/getCache')
 
router.get('/', getCacheMovies, getMovies)
module.exports = router