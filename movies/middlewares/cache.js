const redis = require('redis')
const client = redis.createClient()

module.exports = {
  checkCache: (req, res, next) => {
    client.get('movies', (err, reply) => {
      if (reply) {
        req.headers.cache = JSON.parse(reply)
      }
      next()
    })
  }
}