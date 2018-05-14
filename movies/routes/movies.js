const router = require('express').Router()

var { findAll, findById, create, update, destroy } = require('../controllers/movie.controller')

/* GET users listing. */
router.get('/', findAll)
      .get('/:id', findById)
      .post('/', create)
      .put('/:id', update)
      .delete('/:id', destroy)

module.exports = router;
