const router = require('express').Router()
const {
  findAll,
  findOne,
  create,
  update,
  deletes
} = require('../controllers/moviesController')

router.get('/', findAll)
      .get('/:id', findOne)
      .post('/add', create)
      .put('/update/:id', update)
      .delete('/delete/:id', deletes)

module.exports = router