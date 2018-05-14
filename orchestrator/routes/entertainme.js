var express = require('express');
var router = express.Router();
var { fetchAll, addMovie, addSerial} = require('../controllers/entertainme.controllers')

/* GET users listing. */
router.get('/', fetchAll)
router.post('/movies', addMovie)
router.post('/series', addSerial)

module.exports = router;
