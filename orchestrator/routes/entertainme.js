const express = require('express');
const router = express.Router();

const { readAllMoviesAndTv } = require('../controllers/entertainme')
const { checkMovieAndTvCache } = require('../middlewares/cache')

/* GET users listing. */
router.get('/', checkMovieAndTvCache, readAllMoviesAndTv);

module.exports = router;
