const mongoose = require('mongoose');

const TVSeriesSchema = mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String,
  tag: Array,
  status: Boolean
})

const series = mongoose.model('series', TVSeriesSchema);

module.exports = series;