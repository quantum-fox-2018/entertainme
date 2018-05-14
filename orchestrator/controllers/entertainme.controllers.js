const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports ={
  fetchAll: async(req, res) => {
    try {
      let movies = await axios.get('http://localhost:3001/movies')
      let series = await axios.get('http://localhost:3002/series')
      console.log('movies ', movies.data)
      console.log('series ', series.data)
      let data = {
        movies: movies.data,
        series: series.data
      }

      client.set('entertainme', JSON.stringify(data))
      client.expire('entertainme', 60)

      res.status(200).json({
        message: 'all entertainment fetched',
        data
      })
    } catch (err) {
      res.status(400).json({
        err
      })
    }
  },
  addMovie: async(req, res) => {
    try {
      let movie = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
      }
      let add = await axios.post('http://localhost:3001/movies',movie)

      res.status(200).json({
        message: 'movie added',
        movie: add.data
      })
      client.del('entertainme', (err, reply) => {
        console.log(reply)
      })
    } catch (err) {
      res.status(400).json({
        err
      })
    }
  },
  addSerial: async(req, res) => {
    try {
      let serial = {
        name: req.body.name,
        overview: req.body.overview,
        popularity: req.body.popularity,
        tag: req.body.tag
      }
      let add = await axios.post('http://localhost:3002/series')
      res.status(200).json({
        message: 'new serial added',
        series: add.data
      })
      client.del('entertainme', (err, reply) => {
        console.log(reply)
      })
    } catch (err) {
      res.status(400).json({
        err
      })
    }
  }
}
