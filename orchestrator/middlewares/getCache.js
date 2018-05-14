const redis = require('redis')
const client = redis.createClient();

const getCacheMovies = (req, res, next) => {
  client.get('movies', (err, reply) => {
    if (err) {
      res.status(500).json({
        message:err.message
      })
    } else {
      if (reply) {
        res.status(200).json({
          message: 'get all movies redis success',
          data: JSON.parse(reply)
        })
      } else {
        next()
      }
    }
  })
}

const getCacheTVSeries = (req, res, next) => {
  client.get('tvseries', (err, reply) => {
    if (err) {
      res.status(500).json({
        message:err.message
      })
    } else {
      if (reply) {
        console.log('masuk if ini')
        res.status(200).json({
          message: 'get all tvseries redis success',
          data: JSON.parse(reply)
        })
      } else {
        console.log('masuk else ini')
        next()
      }
    }
  })
}

module.exports = {
  getCacheMovies,
  getCacheTVSeries
}

