const express = require('express')
const router = express.Router()
const { 
  getAllEntertainment, addNewMovies, addNewSeries
} = require('../controller/entertainme.controller')
const { cekCache } = require('../middleware/cekChace')

/* GET users listing. */
router.get('/', cekCache, getAllEntertainment)
      /*=================== Movies =================== */
      .post('/movie', addNewMovies)
      /*=================== Tv Series =================== */
      .post('/tv', addNewSeries)

module.exports = router
