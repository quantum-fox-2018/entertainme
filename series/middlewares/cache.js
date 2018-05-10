const redis = require('redis')
const client = redis.createClient()

module.exports = {
  checkCache: (req, res, next) => {
    client.get('series', (err, reply) => {
      if (reply) {
        req.headers.cache = JSON.parse(reply)
      }
      next()
    })
  }
}
