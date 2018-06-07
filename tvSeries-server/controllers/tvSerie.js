const TvSerie = require('../models/tvSerie')

module.exports = {
  readAllTvSeries: async function (req, res) {
    try {
      let tvSeries = await TvSerie.find()
      res.status(200).json({
        message: 'tv series found successfully',
        data: tvSeries
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  readTvSeries: async function (req, res) {
    try {
      let idTvSeries = req.params.id
      let tvSerie = await TvSerie.findById(idTvSeries)
      res.status(201).json({
        message: 'tv serie found successfully',
        data: tvSerie
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },
  
  createTvSerie: async function (req, res) {
    try {
      let {title, overview, poster_path, popularity} = req.body
      let newTvSerie = await new TvSerie({title, overview, poster_path, popularity}).save()
      res.status(201).json({
        message: 'tv serie added successfully',
        data: newTvSerie
      }).populate('tags')
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  deleteTvSerie: async function (req, res) {
    try {
      let idTvSerie = req.params.id
      let tvSerie = await TvSerie.findByIdAndRemove(idTvSerie)

      res.status(200).json({
        message: 'tv serie delete successfully'
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  },

  updateTvSerie: async function (req, res) {
    try {
      let idTvSerie = req.params.id
      let updateTvSerie = req.body
      let tvSerie = await TvSerie.findByIdAndUpdate(idTvSerie, updateTvSerie)

      res.status(200).json({
        message: 'tv serie update successfuly',
        data: tvSerie
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}