const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seriesSchema = new Schema({
  name: String,
  overview: String,
  popularity: Number,
  tag: []
})

const Series = mongoose.model('Series', seriesSchema)

module.exports = Series
