const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [{type: Schema.Types.ObjectId, ref:'Tag'}]
},{
  timestamps: true
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie