const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
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

let Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie