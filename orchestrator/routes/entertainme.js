const express = require('express');
const router = express.Router();
const { getAll, addMovie, addSeries, updateMovie, updateSeries, delMovie, delSeries } = require('../controllers/entertainme');
const cache = require('../middlewares/checkCache')

router.get('/', cache, getAll);
router.post('/movies', addMovie, getAll);
router.post('/series', addSeries, getAll);
router.put('/movies/:_id', updateMovie, getAll);
router.put('/series/:_id', updateSeries, getAll);
router.delete('/movies/:_id', delMovie, getAll);
router.delete('/series/:_id', delSeries, getAll);

module.exports = router;
