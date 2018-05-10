const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSerieSchema = new Schema({
  title: {
    type: String
  },
  overview: {
    type: String
  },
  poster_path: {
    type: String
  },
  popularity: {
    type: Number
  },
  status: {
    type: Boolean
  },
  tags: [{
    type: Schema.ObjectId,
    ref: 'Tag'
  }]
}, {
  timestamps: true
})

let TvSeries = mongoose.model('TvSerie', tvSerieSchema)

module.exports = TvSeries