const Movie = require('../models/movies.model');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(200, {
      info: 'movies found successfully',
      data: movies
    })
  } catch (error) {
    res.send(500, {
      info: 'error occured while getting data'
    })
  }
}

module.exports = {
  getMovies
}