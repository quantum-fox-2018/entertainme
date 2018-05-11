const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getAllSeries = async (req, res) => {
  try {
    let series = await axios.get('http://localhost:3002/series')
    res.status(200).json({
      message: 'getting series succeed',
      payload: series.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting series',
      err: err
    })
  }
}

const createSeri = async (req, res) => {
  try {
    let newSeri = await axios.post(
      'http://localhost:3002/series',
      {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      },
      {}
    )
    client.get('data', function (err, reply) {
      if (reply !== null) {
        client.del('data')
      }
    })

    res.status(201).json({
      message: 'create new seri succeed',
      payload: newSeri.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail creating new seri',
      err: err
    })
  }
}

module.exports = {
  getAllSeries,
  createSeri
}