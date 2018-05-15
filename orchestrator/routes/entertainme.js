const express = require('express')
const router = express.Router()
const { 
  getAllEntertainment, 
  addNewMovies, updateMovie, deleteMovie,
  addNewSeries, updateSeries, deleteSeries
} = require('../controller/entertainme.controller')
const { cekCache } = require('../middleware/cekChace')

/* GET users listing. */
router.get('/', cekCache, getAllEntertainment)
      /*=================== Movies =================== */
      .post('/movie', addNewMovies)
      .put('/movie/:id', updateMovie)
      .delete('/movie/:id', deleteMovie)
      /*=================== Tv Series =================== */
      .post('/tv', addNewSeries)
      .put('/tv/:id', updateSeries)
      .delete('/tv/:id', deleteSeries)

module.exports = router
