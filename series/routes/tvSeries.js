const express = require('express')
const router = express.Router()
const {
  getAllTvSeries, addTvSeries,
  updateTvSeries, deleteTvSeries,
  addTvSeriesTag
} = require('../controllers/tv.controller')

/* GET users listing. */
router.get('/', getAllTvSeries)
      .post('/', addTvSeries)
      .put('/:id', updateTvSeries)
      .put('/:id/addTag', addTvSeriesTag)
      .delete('/:id', deleteTvSeries)

module.exports = router
