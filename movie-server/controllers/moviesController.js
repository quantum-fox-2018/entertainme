const Movie = require('../models/Movie')
const refreshCache = require('../helpers/refreshCache')

module.exports = {
  findAll: (req, res) => {
    Movie.find()
      .then(response => {
        res.status(200).send({
          message: 'Get all data success',
          data: response
        })
      })
      .catch(err => {
        res.status(400).send({
          message: 'Get data failed',
          detail: err.message
        })
      })
  },

  create: (req, res) => {
    let newMovie = new Movie(req.body)

    newMovie.save()
      .then(response => {
        res.status(201).send({
          message: 'Add data success',
          data: response
        })
      })
      .catch(err => {
        res.status(400).send({
          message: 'Add data failed',
          detail: err.message
        })
      })
  },

  update: (req, res) => {
    Movie.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body
    })
      .then(response => {
        Movie.findById({
          _id: req.params.id
        })
          .then(response => {
            refreshCache()
            res.status(201).send({
              message: 'Update data success',
              data: response
            })
          })
          .catch(err => {
            res.status(400).send({
              message: 'Update data failed',
              detail: err.message
            })
          })
      })
      .catch(err => {
        res.status(400).send({
          message: 'Update data failed',
          detail: err.message
        })
      })
  },

  deletes: (req, res) => {
    Movie.deleteOne({
      _id: req.params.id
    })
      .then(response => {
        refreshCache()
        res.status(201).send({
          message: 'Delete data success',
          data: response
        })
      })
      .catch(err => {
        res.status(400).send({
          message: 'Delete data failed',
          detail: err.message
        })
      })
  }
}