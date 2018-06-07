const express = require('express');
const router = express.Router();

const { readAllTvSeries, createTvSerie, readTvSeries, updateTvSerie, deleteTvSerie } = require('../controllers/tvSerie')

/* GET users listing. */
router.get('/', readAllTvSeries);
router.get('/:id', readTvSeries);
router.post('/', createTvSerie);
router.put('/:id', updateTvSerie);
router.delete('/:id', deleteTvSerie);

module.exports = router;
