const Tag = require('../models/tags.model');

const readTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res
      .status(200)
      .json({
        message: 'get tags success',
        data: tags
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'something went wrong'
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
        message: 'tag added successfully',
        data: createTags
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

module.exports = {
  readTags,
  createTags
}