const axios = require('axios'),
      redis = require("redis"),
      client = redis.createClient()

const getMovies = async (req, res) => {
  try {
    let movies = await axios.get('http://localhost:3001/movies')
    client.set('movies', JSON.stringify(movies.data))
    res.status(200).json({
      data: movies.data
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  getMovies
}