var express = require('express');
var router = express.Router();
var ctSeri = require('../controllers/Series.controller')

router.get('/', ctSeri.getAllSeries)
router.post('/', ctSeri.createSeri)

module.exports = router;
