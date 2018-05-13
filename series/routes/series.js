const express = require('express');
const router = express.Router();

const tVSeriesController = require('../controllers/tVSeriesController');

router.get('/', tVSeriesController.getTVSeries);

module.exports = router;