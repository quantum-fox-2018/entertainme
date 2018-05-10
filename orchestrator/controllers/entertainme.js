const Axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const ipAddressMovie = 'http://localhost:3001/movie'
const ipAddressTvseries =  'http://localhost:3002/tv'

module.exports = {
  readAllMoviesAndTv: async function (req, res) {
    try {
      let moviesApi = await Axios.get(ipAddressMovie)
      let tvSeriesApi = await Axios.get(ipAddressTvseries)

      let movies = moviesApi.data.data
      let tvSeries = tvSeriesApi.data.data

      let data = {
        movies, tvSeries
      }

      client.set('entertain', JSON.stringify(data), 'EX', 300)
      
      res.status(200).json({
        movies: movies,
        data
      })

    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}