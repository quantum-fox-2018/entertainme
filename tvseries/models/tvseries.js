const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvseriesSchema = new Schema({
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

const TVseries = mongoose.model('TVseries', tvseriesSchema);

module.exports = TVseries
