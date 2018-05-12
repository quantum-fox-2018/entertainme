const redis = require('redis')
const client = redis.createClient()
const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

async function checkCache (req, res, next) {
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
  let moviesCache = await getAsync('movie_cache')
  let seriesCache = await getAsync('seri_cache')

  if(moviesCache) {
    req.headers.moviesCache = JSON.parse(moviesCache)
  } 

  if(seriesCache) {
    req.headers.seriesCache = JSON.parse(seriesCache)
  }
  
  next()
}

module.exports = checkCache