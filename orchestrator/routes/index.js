var express = require('express');
var router = express.Router();
var ctIndex = require('../controllers/Index.controller')
var checkCache = require('../middleware/checkCache')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/entertainme', checkCache, ctIndex.getAll)

module.exports = router;
