const router = require('express').Router()
const { getEntertainme, refreshCache } = require('../controllers')

router.get('/', getEntertainme)
router.post('/refresh-cache', refreshCache)

module.exports = router