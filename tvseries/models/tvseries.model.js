const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvseriesSchema = new Schema ({
  name: String,
  overview: String,
  poster_path: String,
  popularity: Number,
  tags: [{
    type: Schema.Types.ObjectId,
    ref: "Tag"
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Tvseries', tvseriesSchema)