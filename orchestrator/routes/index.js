var express = require('express');
var router = express.Router();
var ctIndex = require('../controllers/Index.controller')
var {
  checkMoviesCache,
  checkSeriesCache
} = require('../middleware/checkCache')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/entertainme', checkMoviesCache, checkSeriesCache, ctIndex.getAll)

module.exports = router;
