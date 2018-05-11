const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getAll = async (req, res) => {
  try {
    let movies = await axios.get('http://localhost:3001/movies')
    console.log('movies', movies.data.payload)

    let series = await axios.get('http://localhost:3002/series')
    console.log('series', series.data.payload)
    let data = {
      movies: movies.data.payload,
      series: series.data.payload
    }
    client.set('data', JSON.stringify(data))
    res.status(200).json({
      message: 'succeed',
      movies: movies.data.payload,
      series: series.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting all',
      err: err
    })
  }
}

module.exports = {
  getAll
}