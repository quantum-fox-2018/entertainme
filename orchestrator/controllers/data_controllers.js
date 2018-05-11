const axios = require('axios'),
      redis = require("redis"),
      client = redis.createClient()

const getData = async (req, res) => {
  if (req.movies === null) {
    try {
      const movies = await axios.get('http://localhost:3001/movies')
      client.set('movies', JSON.stringify(movies.data))
      try {
        const tvSeries = await axios.get('http://localhost:3002/tvseries')
        client.set('tvseries', JSON.stringify(tvSeries.data))
        res.status(200).json({
          movies: movies.data,
          tvSeries: tvSeries.data
        })
      } catch (err) {
        res.status(500).json({
          message: err.message
        })
      }
    } catch (err) {
      res.status(500).json({
        message: err.message
      })
    }
  } else {
    try {
      const tvSeries = await axios.get('http://localhost:3002/tvseries')
      client.set('tvseries', JSON.stringify(tvSeries.data))
      res.status(200).json({
        movies: req.movies,
        tvSeries: tvSeries.data
      })
    } catch (err) {
      res.status(500).json({
        message: err.message
      })
    }
  }
  
}

module.exports = {
  getData
}