const axios = require('axios')
const redis = require('redis')
const client = redis.createClient();

module.exports = {
  findAll: async (req, res) => {
    try {
      let movies = await axios.get('http://localhost:3001/movies')
      client.set('movies', JSON.stringify(movies.data))
      return res.status(200).json({
        message: 'get all movies success',
        data: movies.data
      })
    } catch (err) {
      return res.status(500).json({
        message: 'get all movies failed',
        err
      })
    }
  },
  create: async (req, res) => {
    try {
      let { name, overview, poster_path, popularity, tags } = req.body
      await axios.post('http://localhost:3001/movies', {
        name, overview, poster_path, popularity, tags
      })

      // update redis
      let movies = await axios.get('http://localhost:3001/movies')
      client.set('movies', JSON.stringify(movies.data))

      return res.status(201).json({
        message: 'create movies success',
      })
    } catch (err) {
      return res.status(500).json({
        message: 'create movies failed',
        err
      })
    }
  },
  update: async (req, res) => {
    try {
      await axios.put(`http://localhost:3001/movies/${req.params.id}`, req.body)

      // update redis
      let movies = await axios.get('http://localhost:3001/movies')
      client.set('movies', JSON.stringify(movies.data))

      return res.status(200).json({
          message: "update movies success",
          data
      })
    } catch (err) {
      return res.status(400).json({
          message: "update movies failed",
          err
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await axios.delete(`http://localhost:3001/movies/${req.params.id}`)

      // update redis
      let movies = await axios.get('http://localhost:3001/movies')
      client.set('movies', JSON.stringify(movies.data))

      return res.status(200).json({
          message: "delete movies success"
      })
    } catch (err) {
      return res.status(400).json({
          message: "delete movies failed"
      })
    }
  },
}

