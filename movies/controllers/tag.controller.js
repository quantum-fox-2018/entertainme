const Tag = require('../models/tag.model')

module.exports = {
  findAll: async (req, res) => {
    try {
      let data = await Tag.find()
      return res.status(200).json({
        message: 'get all Tags success',
        data
      })
    } catch (err) {
      return res.status(500).json({
        message: 'get all Tags failed',
        err
      })
    }
  },
  create: async (req, res) => {
    try {
      let { tag } = req.body
      await Tag.create({
        tag
      })
      return res.status(201).json({
        message: 'create Tag success',
      })
    } catch (err) {
      return res.status(500).json({
        message: 'create Tag failed',
        err
      })
    }
  },
  update: async (req, res) => {
    try {
      let data = await Tag.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        }
      )
      return res.status(200).json({
          message: "update Tag success",
          data
      })
    } catch (err) {
      return res.status(400).json({
          message: "update Tag failed",
          err
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await Tag.findByIdAndRemove(
        req.params.id
      )
      return res.status(200).json({
          message: "delete Tag success"
      })
    } catch (err) {
      return res.status(400).json({
          message: "delete Tag failed"
      })
    }
  },
}

