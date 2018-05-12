const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getAll = async (req, res) => {
  try {
    let movies = ''
    let series = ''

    if (req.headers.moviesCache) {
      movies = req.headers.moviesCache
    } else {
      movies = await axios.get('http://localhost:3001/movies')
      movies = movies.data.payload
      client.set('movie_cache', JSON.stringify(movies))
    }

    if (req.headers.seriesCache) {
      series = req.headers.seriesCache
    } else {
      series = await axios.get('http://localhost:3002/series')
      series = series.data.payload
      client.set('seri_cache', JSON.stringify(series))

    }
  
    res.status(200).json({
      message: 'succeed',
      movies: movies,
      series: series
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