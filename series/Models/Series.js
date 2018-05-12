const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SeriSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'tags'
    }]
}, {
  timestamps: true
})

let Seri = mongoose.model('series', SeriSchema)

module.exports = Seri