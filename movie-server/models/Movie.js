const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema ({
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

let User = mongoose.model('User', userSchema)

module.exports = User