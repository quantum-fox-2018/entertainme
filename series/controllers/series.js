const Series = require('../models/series');

module.exports = {
  create: async (req, res) => {
    try {
      let series = await Series.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status 
      })
      res.status(201).json({
        message: 'created new series',
        data: series
      })
    } catch (error) {
      res.status(500).json({
        message: 'Oops, something is wrong!',
        error
      })
    }
  },
  readAll: async (req, res) => {
    try {
      let series = await Series.find()
      res.status(200).json({
        message: 'data all series',
        data: series
      })
    } catch (error) {
      res.status(500).json({
        message: 'Oops, something is wrong!',
        error
      })
    }
  },
  update: async (req, res) => {
    try {
      let series = await Series.findOneAndUpdate({_id: req.params._id}, {$set: req.body}, {upsert: true})
      res.status(200).json({
        message: 'update success',
        data: series
      })
    } catch (error) {
      res.status(500).json({
        message: 'Oops, something is wrong!',
        error
      })
    }
  },
  del: async (req, res) => {
    try {
      await Series.remove({_id: req.params._id})
      res.status(200).json({
        message: 'series deleted'
      })
    } catch (error) {
      res.status(500).json({
        message: 'Oops, something is wrong!',
        error
      })
    }
  }
}