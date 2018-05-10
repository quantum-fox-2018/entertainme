var express = require('express');
var router = express.Router();
const checkCache = require('../middlewares/checkcache')
const {getAllData} = require('../controllers/entertain.controller')

router.get('/', checkCache, getAllData)

module.exports = router;
