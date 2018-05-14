const redis = require("redis"),
      client = redis.createClient()

const checkCache = (key, callback) => {
  client.get(key, (err, reply) => {
    if (err) {
      callback(err)
    } else {
      callback(null, reply)
    }
  })
}

module.exports = {
  checkCache
}