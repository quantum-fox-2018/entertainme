const express = require('express');
router = express.Router();

const {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/orchestrator.controller');

router.get('/', getMovies);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;