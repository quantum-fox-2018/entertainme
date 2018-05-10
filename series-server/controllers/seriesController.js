const Series = require('../models/Series')

module.exports = {
  findAll: (req, res) => {
    Series.find()
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
    let newSeries = new Series(req.body)

    newSeries.save()
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
    Series.findByIdAndUpdate({
      _id: req.params.id
    }, {
      $set: req.body
    })
      .then(response => {
        Series.findById({
          _id: req.params.id
        })
          .then(response => {
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
    Series.deleteOne({
      _id: req.params.id
    })
      .then(response => {
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