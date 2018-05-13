const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  text: String
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;