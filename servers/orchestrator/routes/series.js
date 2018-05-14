const express = require('express');
router = express.Router();

const {
  getSeries,
  addSerie,
  updateSerie,
  deleteSerie
} = require('../controllers/orchestrator.controller');

router.get('/', getSeries);
router.post('/', addSerie);
router.put('/:id', updateSerie);
router.delete('/:id', deleteSerie);

module.exports = router;