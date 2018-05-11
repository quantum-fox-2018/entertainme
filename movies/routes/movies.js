var express = require('express');
var route = express.Router();
const movieController = require('../controllers/movies.controllers')
const { checkCache } = require('../middlewares/cache')

/* GET users listing. */
route.get('/', checkCache, movieController.getAll)
route.post('/', checkCache, movieController.addMovie)
route.put('/:id', movieController.updateMovie)
route.delete('/:id', movieController.deleteMovie)
module.exports = route;
