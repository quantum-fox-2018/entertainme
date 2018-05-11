var express = require('express');
var router = express.Router();
const checkCache = require('../middlewares/checkcache')
const {getAllData} = require('../controllers/entertain.controller')
const {addMovie, updateMovie, removeMovie} = require('../controllers/movies.controller')
const {addTvseries, updateTvseries, removeTvseries} = require('../controllers/tvseries.controller')


router.get('/', checkCache, getAllData)
router.post('/movies', addMovie)
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', removeMovie)
router.post('/tvseries', addTvseries)
router.put('/tvseries/:id', updateTvseries)
router.delete('/tvseries/:id', removeTvseries)

module.exports = router;
