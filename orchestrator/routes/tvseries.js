const router = require('express').Router()
const { getTVSeries } = require('../controllers/tvseries_controller')
const { getCacheTVSeries } = require('../middlewares/getCache')
 
router.get('/', getCacheTVSeries, getTVSeries)
module.exports = router