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
module.exports = {
  getCacheMovies,
  getCacheTVSeries
}