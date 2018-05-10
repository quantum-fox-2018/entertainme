const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const { getMoviesCache, getSeriesCache } = require('../helpers/getCache')

const getEntertainme = async (req, res) => {
  try {
    let moviesCache = await getMoviesCache()
    let seriesCache = await getSeriesCache()
    let movies = null
    let series = null

    if (!moviesCache.length) {
      movies = await axios.get('http://localhost:3001/api/movies')
      client.set('movies', JSON.stringify(movies.data.data))
    } else {
      movies = {
        data: moviesCache
      }
    }

    if (!seriesCache.length) {
      series = await axios.get('http://localhost:3002/api/series')
      client.set('series', JSON.stringify(series.data.data))
    } else {
      series = {
        data: seriesCache
      }
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

module.exports = getEntertainme