const redis = require('redis')
const client = redis.createClient()

function refreshCache (cacheKey) {
  client.get(cacheKey, function (err, reply) {
    if (err) {
      console.log(`fail to get cache with key : ${cacheKey} =`, err)
    } else {
      if (reply !== null) {
        client.del(cacheKey)
      }
    }
  })
}

module.exports = refreshCache