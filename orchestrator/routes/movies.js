const router = require('express').Router()

const { findAll, create, update, destroy } = require('../controllers/movie.controller')
const { getCacheMovies } = require('../middlewares/getCache')

/* GET users listing. */
router.get('/', getCacheMovies, findAll)
      .post('/', create)
      .put('/:id', update)
      .delete('/:id', destroy)

module.exports = router;
