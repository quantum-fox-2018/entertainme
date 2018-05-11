const redis = require('redis')
const client = redis.createClient()

function checkCache (req, res, next) {
  client.get('data', function (err, reply) {
    if (err) {
      res.status(500).json({
        message: 'check cache error',
        err: err
      })
    } else {
      if (reply === null) {
        next()
      } else {
        res.status(200).json({
          message: 'get data via cache succeed',
          payload: JSON.parse(reply)
        })
      }
    }
  })
}

module.exports = checkCache