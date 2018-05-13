const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: Array,
  status: Boolean
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;