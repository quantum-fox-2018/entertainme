const axios = require('axios')
      redis = require("redis"),
      client = redis.createClient(),
      { checkCache } = require('../helpers/checkCache')

const getTVSeries = async (req, res) => {
  try {
    let tvSeries = await axios.get('http://localhost:3002/tvseries')
    client.set('tvseries', JSON.stringify(tvSeries.data))
    res.status(200).json({
      data: tvSeries.data
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const addTVSeries = async (req, res) => {
  try {
    let newTVSeries = await axios.post('http://localhost:3002/tvseries', {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      text: req.body.text,
      tag: req.body.tag,
      status: req.body.status
    }, {})
    checkCache('tvseries', (err, reply) => {
      if (err) {
        res.status(500).json({ message: err.message })
      } else {
        client.del('tvseries')
        res.status(201).json({
          data: newTVSeries.data.data
        })
      }
    })
  } catch (error) {
    res.status(201).json({
      message: error.message
    })
  }
}

const deleteTVSeries = async (req, res) => {
  try {
    await axios.delete('http://localhost:3002/tvseries/' + req.params.id)
    checkCache('tvseries', (err, reply) => {
      if (err) {
        res.status(500).json({ message: err.message })
      } else {
        client.del('tvseries')
        res.status(201).json({
          message: 'delete data success'
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const editTVSeries = async (req, res) => {
  try {
    await axios.put('http://localhost:3002/tvseries/' + req.params.id)
    checkCache('tvseries', (err, reply) => {
      if (err) {
        res.status(500).json({ message: err.message })
      } else {
        client.del('tvseries')
        res.status(201).json({
          message: 'edit data success'
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getTVSeries,
  addTVSeries,
  editTVSeries,
  deleteTVSeries
}