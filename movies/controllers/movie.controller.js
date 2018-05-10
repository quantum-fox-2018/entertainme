const Movie = require('../models/movie.model')

module.exports = {
  findAll: async (req, res) => {
    try {
      let data = await Movie.find().populate('tags')
      return res.status(200).json({
        message: 'get all movies success',
        data
      })
    } catch (err) {
      return res.status(500).json({
        message: 'get all movies failed',
        err
      })
    }
  },
  create: async (req, res) => {
    try {
      let { title, overview, poster_path, popularity, tags } = req.body
      await Movie.create({
        title,
        overview,
        poster_path,
        popularity,
        tags
      })
      return res.status(201).json({
        message: 'create movie success',
      })
    } catch (err) {
      return res.status(500).json({
        message: 'create movie failed',
        err
      })
    }
  },
  update: async (req, res) => {
    try {
      let data = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body, {
          new: true
        }
      )
      return res.status(200).json({
          message: "update movie success",
          data
      })
    } catch (err) {
      return res.status(400).json({
          message: "update movie failed",
          err
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await Movie.findByIdAndRemove(
        req.params.id
      )
      return res.status(200).json({
          message: "delete movie success"
      })
    } catch (err) {
      return res.status(400).json({
          message: "delete movie failed"
      })
    }
  },
}

