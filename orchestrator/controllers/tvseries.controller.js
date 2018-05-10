const axios = require('axios')
const redis = require('redis')
const client = redis.createClient();

module.exports = {
  findAll: async (req, res) => {
    try {
      let tvseries = await axios.get('http://localhost:3002/tvseries')
      client.set('tvseries', JSON.stringify(tvseries.data))
      return res.status(200).json({
        message: 'get all tvseries success',
        data: tvseries.data
      })
    } catch (err) {
      return res.status(500).json({
        message: 'get all tvseries failed',
        err
      })
    }
  },
  create: async (req, res) => {
    try {
      let { name, overview, poster_path, popularity, tags } = req.body
      await axios.post('http://localhost:3002/tvseries', {
        name, overview, poster_path, popularity, tags
      })

      // update redis
      let tvseries = await axios.get('http://localhost:3002/tvseries')
      client.set('tvseries', JSON.stringify(tvseries.data))

      return res.status(201).json({
        message: 'create Tvseries success',
      })
    } catch (err) {
      return res.status(500).json({
        message: 'create Tvseries failed',
        err
      })
    }
  },
  update: async (req, res) => {
    try {
      await axios.put(`http://localhost:3002/tvseries/${req.params.id}`, req.body)

      // update redis
      let tvseries = await axios.get('http://localhost:3002/tvseries')
      client.set('tvseries', JSON.stringify(tvseries.data))

      return res.status(200).json({
          message: "update Tvseries success",
          data
      })
    } catch (err) {
      return res.status(400).json({
          message: "update Tvseries failed",
          err
      })
    }
  },
  destroy: async (req, res) => {
    try {
      await axios.delete(`http://localhost:3002/tvseries/${req.params.id}`)

      // update redis
      let tvseries = await axios.get('http://localhost:3002/tvseries')
      client.set('tvseries', JSON.stringify(tvseries.data))

      return res.status(200).json({
          message: "delete Tvseries success"
      })
    } catch (err) {
      return res.status(400).json({
          message: "delete Tvseries failed"
      })
    }
  },
}

