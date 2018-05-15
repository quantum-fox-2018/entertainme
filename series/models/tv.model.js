const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSchema = new Schema ({
  title: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tag: [{type:Schema.Types.ObjectId, ref:'Tag'}]
},{
  timestamps: true
})

const Tv = mongoose.model('Tv', tvSchema)
module.exports = Tv