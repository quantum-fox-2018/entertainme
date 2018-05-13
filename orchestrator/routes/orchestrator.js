const express = require('express');
const router = express.Router();

const {getAll} = require('../controllers/orchestrator.controller');

router.get('/', getAll);

module.exports = router;