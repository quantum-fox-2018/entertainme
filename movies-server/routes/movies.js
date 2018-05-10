const express = require('express');
const router = express.Router();

const { readAllMovies, createMovie } = require('../controllers/movie')

/* GET users listing. */
router.get('/', readAllMovies);
router.post('/', createMovie);

module.exports = router;
