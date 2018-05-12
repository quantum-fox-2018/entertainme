const redis = require('redis')
const client = redis.createClient()
const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

async function checkCache (req, res, next) {
  try {
    const moviesCache = await getAsync('movies_cache')
    req.headers.movies_cache = JSON.parse(moviesCache)
  } catch (err) {
    console.log('fail to get cache with key: movies_cache')
  }
  try {
    const seriesCache = await getAsync('series_cache')
    req.headers.series_cache = JSON.parse(seriesCache)
  } catch (err) {
    console.log('fail to get cache with key: series_cache')
  }
  next()
}

module.exports = checkCache


  // method to get cache without promisify, data is movies & series combined
  // client.get('data', function (err, reply) {
  //   if (err) {
  //     res.status(500).json({
  //       message: 'check cache error',
  //       err: err
  //     })
  //   } else {
  //     if (reply === null) {
  //       next()
  //     } else {
  //       res.status(200).json({
  //         message: 'get data via cache succeed',
  //         payload: JSON.parse(reply)
  //       })
  //     }
  //   }
  // })