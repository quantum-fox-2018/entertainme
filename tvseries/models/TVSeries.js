const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSeriesSchema = new Schema({
  title: {
    type: String
  },
  overview: {
    type: String
  },
  poster_path: {
    type: String
  },
  overview: {
    type: String
  },
  popularity: {
    type: Number
  },
  status: {
    type: String
  },
  tags: [{
      text: {
        type: String
      },
      tag: {
        type: Schema.Types.ObjectId,
        ref: "tags"
      }
    }]
}, {
  timestamps: true
})

let TVSeries = mongoose.model('tvseriues', tvSeriesSchema)

module.exports = TVSeries