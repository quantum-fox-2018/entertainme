var express = require('express');
var router = express.Router();
const {getTvseries, addTvseries, updateTvseries, removeTvseries} = require('../controllers/tvseries.controller')

router.get('/', getTvseries)
router.post('/', addTvseries)
router.put('/:id', updateTvseries)
router.delete('/:id',removeTvseries)

module.exports = router;
