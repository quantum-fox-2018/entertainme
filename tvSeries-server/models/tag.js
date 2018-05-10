const mongoose = require('mongoose')
const Schema = mongoose.Schema

let tagSchema = new Schema({
  title: {
    type: String
  }
})

let Tag = mongoose.model('Tag', tagSchema)
module.exports = Tag