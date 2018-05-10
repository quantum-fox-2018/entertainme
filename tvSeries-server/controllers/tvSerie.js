const TvSerie = require('../models/tvSerie')

module.exports = {
  readAllTvSeries: async function (req, res) {
    try {
      let tvSeries = await TvSerie.find()
      res.status(200).json({
        message: 'tv found successfully',
        data: tvSeries
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
  }
}