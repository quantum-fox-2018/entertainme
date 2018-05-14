const router = require('express').Router()
const { getTVSeries,  addTVSeries, editTVSeries, deleteTVSeries } = require('../controllers/tvseries_controller')
const { getCacheTVSeries } = require('../middlewares/getCache')
 
router.get('/', getCacheTVSeries, getTVSeries)
router.post('/', addTVSeries)
router.put('/:id', editTVSeries)
router.delete('/:id', deleteTVSeries)
module.exports = router