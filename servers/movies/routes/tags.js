const express = require('express');
const router = express.Router();

const {
  readTags,
  createTags
} = require('../controllers/tags.controller');

router.get('/', readTags);
router.post('/', createTags);

module.exports = router;