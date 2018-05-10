const router = require('express').Router()
const getEntertainme = require('../controllers')

router.get('/entertainme', getEntertainme)

module.exports = router