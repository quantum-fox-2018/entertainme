const router = require('express').Router()

const { findAll, create, update, destroy } = require('../controllers/tvseries.controller')
const {getCacheTVSeries} = require('../middlewares/getCache')

/* GET users listing. */
router.get('/', getCacheTVSeries, findAll)
      .post('/', create)
      .put('/:id', update)
      .delete('/:id', destroy)

module.exports = router;
