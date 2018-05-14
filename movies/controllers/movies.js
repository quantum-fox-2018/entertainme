const Movies = require('../models/movies');

module.exports = {
  create: async (req, res) => {
    try {
      let movie = await Movies.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status 
      })
      res.status(201).json({
        message: 'created new movie',
        data: movie
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
      let movies = await Movies.find()
      res.status(200).json({
        message: 'data all movies',
        data: movies
      })
    } catch (error) {
      res.status(500).json({
        message: 'Oops, something is wrong!',
        error
      })
    }
  },
  readOne: async (req, res) => {
    try {
      let movie = await Movies.findById(req.params._id)
      res.status(200).json({
        message: 'data movie',
        data: movie
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
      let movie = await Movies.findOneAndUpdate({_id: req.params._id}, {$set: req.body}, {upsert: true})
      res.status(200).json({
        message: 'update success',
        data: movie
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
      await Movies.remove({_id: req.params._id})
      res.status(200).json({
        message: 'movie deleted'
      })
    } catch (error) {
      res.status(500).json({
        message: 'Oops, something is wrong!',
        error
      })
    }
  }
}