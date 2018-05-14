const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getAll = async (req, res) => {
  try {
    let movies, series

    if (req.headers.movies_cache) {
      movies = req.headers.movies_cache
    } else {
      movies = await axios.get('http://localhost:3001/movies')
      movies = movies.data.payload
      client.set('movies_cache', JSON.stringify(movies))
    }

    if (req.headers.series_cache) {
      series = req.headers.series_cache
    } else {
      series = await axios.get('http://localhost:3002/series')
      series = series.data.payload
      client.set('series_cache', JSON.stringify(series))
    }
  
    res.status(200).json({
      message: 'get all movies and series succeed',
      movies: movies,
      series: series
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting all movies and series',
      err: err
    })
  }
}

module.exports = {
  getAll
}