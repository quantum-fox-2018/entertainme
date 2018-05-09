const mongoose = require('mongoose')
const Schema = mongoose.Schema

let movieSchema = new Schema({
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

let Movie = mongoose.model('movies', movieSchema)

module.exports = Movie