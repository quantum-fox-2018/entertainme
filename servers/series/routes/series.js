const express = require('express');
const router = express.Router();

const {
  read,
  create,
  update,
  deletes
} = require('../controllers/series.controller');

router.get('/', read)
router.post('/',create)
router.put('/:id',update)
router.delete('/:id',deletes)

module.exports = router;