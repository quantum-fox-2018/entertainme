const mongoose = require('mongoose')
const Schema = mongoose.Schema

let seriesSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  popularity: String,
  tag: Array,
  overview: String,
  poster_path: String,
  status: String
},{
 timestamps: true
})

let Series = mongoose.model('Series', seriesSchema)

module.exports = Series 