const Tvseries = require('../models/tvseries')

module.exports = {
  getTvseries: async (req, res) => {
    try {
      let data = await Tvseries.find()
      res.status(200).json({
        message: 'success get Tvseries data',
        data
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed get data',
        error
      }) 
    }
  },
  addTvseries: async (req, res) => {
    try {
      let input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status 
      }
      let addNewTvseries  = await Tvseries.create(input)
      res.status(200).json({
        message: 'success add new Tvseries data',
        data: input
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed add Tvseries',
        error
      })
    }
  },
  removeTvseries: async (req, res) => {
    try {
      await Tvseries.findByIdAndRemove(req.params.id)
      res.status(200).json({
        message: 'success delete Tvseries'
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed remove Tvseries',
        error
      })
    }
  },
  updateTvseries: async (req, res) => {
    try {
      let id = {_id: req.params.id}
      let data = await Tvseries.findByIdAndUpdate(id, req.body)
      res.status(201).json({
        message: 'success update data',
        data
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed update Tvseries',
        error
      })
    }
  }
}