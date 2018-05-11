const redis = require('redis');
const client = redis.createClient();

const cache = (req, res, next) => {
  client.get('entertainme', (err, reply) => {
    if (err) {
      res.status(500).json(err)
    } else if (reply) {
      res.status(200).json({
        message: 'data from cache',
        data: JSON.parse(reply)
      })
    } else {
      console.log('cache not found');
      next()
    }
  })
}

module.exports = cache;