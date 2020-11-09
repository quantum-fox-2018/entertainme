const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [],
  status: {
    type: String,
    default: 'All ages'
  }
},{
  timestamps: true
});

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies
