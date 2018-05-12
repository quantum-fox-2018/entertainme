var express = require('express');
var router = express.Router();
var ctSeri = require('../controllers/Series.controller')
var {
  checkMoviesCache,
  checkSeriesCache
} = require('../middleware/checkCache')

router.get('/', checkSeriesCache, ctSeri.getAllSeries)
router.get('/:id', ctSeri.getSeriById)
router.post('/', ctSeri.createSeri)
router.put('/:id', ctSeri.updateSeri)
router.delete('/:id', ctSeri.deleteSeri)

module.exports = router;
