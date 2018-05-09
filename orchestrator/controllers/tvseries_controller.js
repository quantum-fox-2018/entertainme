const axios = require('axios')
      redis = require("redis"),
      client = redis.createClient()

const getTVSeries = async (req, res) => {
  try {
    let tvSeries = await axios.get('http://localhost:3002/tvseries')
    client.set('tvseries', JSON.stringify(tvSeries.data))
    res.status(200).json({
      data: tvSeries.data
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  getTVSeries
}