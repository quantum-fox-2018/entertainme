const express = require('express');
const router = express.Router();
const { create, readAll, update, del } = require('../controllers/series');

router.post('/', create);
router.get('/', readAll);
router.put('/:_id', update);
router.delete('/:_id', del);

module.exports = router;
