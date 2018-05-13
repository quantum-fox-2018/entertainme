const mongoose = require('mongoose');

const TVSeriesSchema = mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String,
  tag: Array,
  status: Boolean
})

const TVSerie = mongoose.model('TVSerie', TVSerieSchema);

module.exports = TVSeries;