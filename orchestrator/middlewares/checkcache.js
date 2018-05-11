const redis = require('redis')
const client = redis.createClient()

const checkCache = (req, res, next) => {
  client.get('entertainme', (error, reply) => {
    if(reply) {
      console.log('cache exist reply===', reply)
      res.status(200).json({
        msg: 'success get data',
        data: JSON.parse(reply)
      })
      return
    } else {
      console.log('cache not exist!!')
      next()
    }
  })
}

module.exports = checkCache