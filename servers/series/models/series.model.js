const mongoose = require('mongoose');

const TVSerieSchema = mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: Array,
  status: Boolean
})

const series = mongoose.model('series', TVSerieSchema);

module.exports = series;