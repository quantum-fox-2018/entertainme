const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/entertainme');
const cache = require('../middlewares/checkCache')

router.get('/', getAll);

module.exports = router;
