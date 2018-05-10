const redis = require('redis')
const { promisify } = require('util')
const client = redis.createClient()
const getAsync = promisify(client.get).bind(client)

module.exports = {
  cekCache: async (req, res, next) => {
    let moviesCache = await getAsync('movies')
    let seriesCache = await getAsync('tvSeries')
    if (moviesCache) {
      req.headers.moviesCache = JSON.parse(moviesCache)
    }

    if (seriesCache) {
      req.headers.seriesCache = JSON.parse(seriesCache)
    }
    // console.log('Movies Cache', JSON.parse(moviesCache))
    // console.log('Tv Series Cache', JSON.parse(seriesCache))
    next()
  }
}

// function getMoviesCache() {
//   client.get('movies', (err, reply) => {
//     // console.log('movie reply ==>', JSON.parse(reply))
//     return new Promise((resolve, reject) => {
//       if (reply) {
//         resolve(JSON.parse(reply))
//       }
//       reject(false)
//     })
//   })
// }

// function getSeriesCache() {
//   return new Promise((resolve, reject) => {
//     client.get('tvSeries', (err, reply) => {
//       // console.log('series reply ===>', JSON.parse(reply))
//       if (reply) {
//         resolve(JSON.parse(reply))
//       }
//       reject(false)
//     })
//   })
// }