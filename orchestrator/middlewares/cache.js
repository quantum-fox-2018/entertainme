const redis = require('redis')
const client = redis.createClient()

module.exports = {
  checkMovieAndTvCache: function (req, res, next) {
    client.get('entertainme', function(err, reply) {
      if(err) {
        res.status(500).json({info: "Somthing Went Wrong on Redis"})
      } else {
        if(reply) {
          res.status(200).json(JSON.parse(reply))
        } else {
          next()
        }
      }
    })
  }
}