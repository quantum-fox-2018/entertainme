const Tag = require('../models/tags.model');

const readTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res
      .status(200)
      .json({
        info: 'get tags success',
        data: tags
      });
  } catch (error) {
    res
      .status(500)
      .json({
        info: 'error occured while getting tags'
      });
  }
}

const createTags = async (req, res) => {
  try {
    const createTags = await Tag.create({
      text: req.body.text
    });
    res
      .status(200)
      .json({
        info: 'tag added successfully',
        data: createTags
      });
  } catch (error) {
    res
      .status(500)
      .json({
        info: 'error occured while adding data'
      });
  }
}

module.exports = {
  readTags,
  createTags
}