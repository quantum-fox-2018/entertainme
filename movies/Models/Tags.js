const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tagSchema = new Schema({
  text: {
    type: String
  }
})

let Tag = mongoose.model('tags', tagSchema)
module.exports = Tag