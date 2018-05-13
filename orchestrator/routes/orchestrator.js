const express = require('express');
const router = express.Router();

const entertainmeController = require('../controllers/entertainmeController');

router.get('/', entertainmeController.getMoviesAndTVs);

module.exports = router;