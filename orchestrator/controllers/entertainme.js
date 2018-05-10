const axios = require('axios');
const redis = require('redis');
const client = redis.createClient();

module.exports = {
  getAll: async (req, res) => {
    try {
      let movies = await axios.get('http://localhost:3001/movies')
      let series = await axios.get('http://localhost:3002/series')
      let allData = {
        movies: movies.data,
        series: series.data
      }
      client.set('entertainme', JSON.stringify(allData))
      res.status(200).json({
        message: 'success get all data',
        data: allData
      })
    } catch (error) {
      res.status(500).json({
        message: 'error',
        error
      })
    }
  }
}