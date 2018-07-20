const redis = require("redis"),
      client = redis.createClient()
const { checkCache } = require('../helpers/checkCache')

const getCacheMovies = (req, res, next) => {
  checkCache('movies', (err, reply) => {
    if (err) {
      res.status(500).json({
        message:err.message
      })
    } else {
      reply ?
      res.status(200).json({
        message: 'get data movies success',
        data: JSON.parse(reply)
      }) : next()
    }
  })
}

const getCacheTVSeries = (req, res, next) => {
  checkCache('tvseries', (err, reply) => {
    if (err) {
      res.status(500).json({
        message:err.message
      })
    } else {
      reply ?
      res.status(200).json({
        message: 'get data movies success',
        data: JSON.parse(reply)
      }) : next()
    }
  })
}

const getAllCache = (req, res, next) => {
  checkCache('tvseries', (err, series) => {
    if (err) {
      res.status(500).json({
        message:err.message
      })
    } else {
      req.series = JSON.parse(series)
      checkCache('movies', (err, movies) => {
        if (err) {
          res.status(500).json({
            message:err.message
          })
        } else {
          req.movies = JSON.parse(movies)
          movies && series ?
          res.status(200).json({
            message: 'get data movies and series success',
            movies: JSON.parse(movies),
            series: JSON.parse(series)
          }) : next()
        }
      })
    }
  })
}
module.exports = {
  getCacheMovies,
  getCacheTVSeries,
  getAllCache
}