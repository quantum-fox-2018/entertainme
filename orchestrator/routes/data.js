const router = require('express').Router()
const { getData } = require('../controllers/data_controllers')
const { getAllCache } = require('../middlewares/getCache')

router.get('/', getAllCache, getData)
module.exports = router