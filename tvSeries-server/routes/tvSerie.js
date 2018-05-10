const express = require('express');
const router = express.Router();

const { readAllTvSeries, createTvSerie } = require('../controllers/tvSerie')

/* GET users listing. */
router.get('/', readAllTvSeries);
router.post('/', createTvSerie);

module.exports = router;
