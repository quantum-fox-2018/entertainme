const redis = require('redis')
const client = redis.createClient()

const getMoviesCache = () => {
  return new Promise((resolve, reject) => {
    client.get('movies', (err, response) => {
      if (response) {
        resolve(JSON.parse(response))
      } else {
        resolve([])
      }
    })
  })
}

const getSeriesCache = () => {
  return new Promise((resolve, reject) => {
    client.get('series', (err, response) => {
      if (response) {
        console.log('GET SERIES CACHE', response)
        resolve(JSON.parse(response))
      } else {
        resolve([])
      }
    })
  })
}

module.exports = {
  getMoviesCache,
  getSeriesCache
}