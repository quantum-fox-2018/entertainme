const Tvseries = require('../models/tvseries.model')

module.exports = {
  findAll: async (req, res) => {
    try {
      let data = await Tvseries.find().populate('tags')
      return res.status(200).json({
        message: 'get all Tvseries success',
        data
      })
    } catch (err) {
      return res.status(500).json({
        message: 'get all Tvseries failed',
        err
      })
    }
  },
  create: async (req, res) => {
    try {
      let { name, overview, poster_path, popularity, tags } = req.body
      await Tvseries.create({
        name,
        overview,
        poster_path,
        popularity,
        tags
      })
      return res.status(201).json({
        message: 'create Tvseries success',
      })
    } catch (err) {
      return res.status(500).json({
        message: 'create Tvseries failed',
        err
      })
    }
  },
  update: async (req, res) => {
    try {
      let data = await Tvseries.findByIdAndUpdate(
        req.params.id,
        req.body, {
          new: true
        }
      )
      return res.status(200).json({
          message: "update Tvseries success",
          data
      })
    } catch (err) {
      return res.status(400).json({
          message: "update Tvseries failed",
          err
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await Tvseries.findByIdAndRemove(
        req.params.id
      )
      return res.status(200).json({
          message: "delete Tvseries success"
      })
    } catch (err) {
      return res.status(400).json({
          message: "delete Tvseries failed"
      })
    }
  },
}

