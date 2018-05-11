const Tag = require('../models/tag.model')

module.exports = {
  getAllTags: async (req, res) => {
    try {
      let tags = await Tag.find()
      res.send({
        message: 'get All Tags Success',
        status: 200,
        data: tags
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  addTag: async (req, res) => {
    try {
      let newTag = Tag.create({
        text: req.body.text
      })
      res.send({
        message: 'New Tag have been added',
        status: 200,
        data: newTag
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  deleteTag: async (req, res) => {
    try {
      let TagId = req.params.id
      let deletedTag = await Tag.remove({_id: TagId})
      res.send({
        message: `Tag with id ${TagId} Succesfully deleted`,
        status: 200,
        deletedTag
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  }
}