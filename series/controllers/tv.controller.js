const Tv = require('../models/tv.model')

module.exports = {
  getAllTvSeries: async (req, res) => {
    try {
      let tvSeries = await Tv.find().populate('tag')
      res.send({
        message: 'get All Tv Series Success',
        status: 200,
        data: tvSeries
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  getTvSeriesById: async (req, res) => {
    try {
      let tvSeries = await Tv.find(req.params.id).populate('tag')
      res.send({
        message: 'get One Tv Series Success',
        status: 200,
        data: tvSeries
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  addTvSeries: async (req, res) => {
    try {
      let newTvSeries = await Tv.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity
      })
      console.log('New Tv Series', newTvSeries)
      res.send({
        message: 'New Tv Series have been added',
        status: 200,
        data: newTvSeries
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong'
      })
    }
  },
  addTvSeriesTag: async (req, res) => {
    try {
      let tvSeriesId = req.params.id
      let addedTvSeriesTag = await Tv.update(
        {_id: tvSeriesId},
        {$addToSet: {tag: req.body.tag}}
      )
      res.send({
        message: `Tag has been added to Tv Series`,
        status: 200,
        addedTvSeriesTag
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  updateTvSeries: async (req, res) => {
    try {
      let tvSeriesId = req.params.id
      let updatedTvSeries = await Tv.update(
        {_id: tvSeriesId},
        {
          $set: {
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity
          }
        }
      )
      if (updatedTvSeries.ok === 1 && updatedTvSeries.nModified === 1) {
        updatedTvSeries = await Tv.findById(tvSeriesId).populate('tag')
      }
      // console.log('Update Tv Series ===>', updatedTvSeries)
      res.send({
        message: `Tv Series with id ${tvSeriesId} Succesfully updated`,
        status: 200,
        updatedTvSeries
      })
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  deleteTvSeries: async (req, res) => {
    try {
      let tvSeriesId = req.params.id
      let deletedtvSeries = await Tv.remove({_id: tvSeriesId})
      res.send({
        message: `Tv Series with id ${tvSeriesId} Succesfully deleted`,
        status: 200,
        deletedtvSeries
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