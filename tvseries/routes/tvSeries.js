const router = require('express').Router()
const { getTVSeries, addTVSeries } = require('../controllers/tvseries_controller')

router.get('/', getTVSeries)
router.post('/', addTVSeries)

module.exports = router