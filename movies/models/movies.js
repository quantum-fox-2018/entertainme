const mongoose = require('mongoose');
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [],
  status: String
},{
  timestamps: true
})

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;