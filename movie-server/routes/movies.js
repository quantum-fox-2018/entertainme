const router = require('express').Router()
const {
  findAll,
  create,
  update,
  deletes
} = require('../controllers/moviesController')

router.get('/', findAll)
      .post('/add', create)
      .put('/update/:id', update)
      .delete('/delete/:id', deletes)

module.exports = router