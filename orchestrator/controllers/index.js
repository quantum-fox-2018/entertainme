const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const { getMoviesCache, getSeriesCache } = require('../helpers/getCache')

const getEntertainme = async (req, res) => {
  try {
    let moviesCache = await getMoviesCache()
    let seriesCache = await getSeriesCache()
    let movies, series

    if (moviesCache) {
      movies = {
        data: moviesCache
      }
    } else {
      movies = await axios.get('http://localhost:3001/api/movies')
      client.set('movies', JSON.stringify(movies.data.data))
    }

    if (seriesCache) {
      series = {
        data: seriesCache
      }
    } else {
      series = await axios.get('http://localhost:3002/api/series')
      client.set('series', JSON.stringify(series.data.data))
    }

    res.status(200).send({
      message: 'Show all Movies & TV Series',
      movies: {
        info: 'Movies found successfully',
        data: movies.data
      },
      series: {
        info: 'TV Series found successfully',
        data: series.data
      }
    })
  } catch (err) {
    res.status(400).send({
      message: 'Get data failed'
    })
  }
}

const refreshCache = (req, res) => {
  client.flushall()
}

module.exports = {
  getEntertainme,
  refreshCache
} 