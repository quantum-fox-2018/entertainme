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

movieSchema.pre('remove', function (next) {
  this.model('tags').update(
    {movies: this._id}, 
    {$pull: {movies: this._id}}, 
    {multi: true},
    next,
  )
})

let Movie = mongoose.model('movies', movieSchema)

module.exports = Movie