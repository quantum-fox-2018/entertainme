const router = require('express').Router()
const { getEntertainme, refreshCache } = require('../controllers')

router.get('/entertainme', getEntertainme)
      .post('/entertainme/refresh-cache', refreshCache)

module.exports = router