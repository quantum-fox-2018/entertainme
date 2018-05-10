const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  addTvseries: async (req, res) => {
    try {
      let input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status 
      }
      let tvseries = await axios({
        method: 'post',
        url: 'http://localhost:3002/tvseries',
        data: input
      })

      console.log('new Tvseriess==', tvseries)
      if(tvseries) {
        client.get('entertainme', (err, reply) => {
          let existCache = JSON.parse(reply)
          console.log('ini cahche===', existCache, '==============')
          existCache.series.push(tvseries.data.data)
          client.set('entertainme', JSON.stringify(existCache))
          return res.status(200).json(tvseries.data)
        })
      }else {
        res.status(400).json({
          msg: 'failed add Tvseriess',
          error
        }) 
        return  
      }

    } catch (error) {
      res.status(400).json({
        msg: 'failed add Tvseriess',
        error
      })
    }
  },
  removeTvseries: async (req, res) => {
    try {
      let deletedTvseries = await axios({
        method: 'delete',
        url: `http://localhost:3002/tvseries/${req.params.id}`,
      })
      if(deletedTvseries) {
        let movies = await axios({
          method: 'get',
          url: `http://localhost:3001/movies`,
        })
        let tvseries = await axios({
          method: 'get',
          url: `http://localhost:3002/tvseries`,
        })
        let dataAll = {
          movies: movies.data.data,
          series: tvseries.data.data
        }
          client.set('entertainme', JSON.stringify(dataAll))
          return res.status(200).json(deletedTvseries.data)

      }else {
        res.status(400).json({
          msg: 'failed remove Tvseriess',
          error
        }) 
        return  
      }

    } catch (error) {
      res.status(400).json({
        msg: 'failed remove Tvseriess',
        error
      })
    }
  },
  updateTvseries: async (req, res) => {
    try {
      let updateTvseries = await axios({
        method: 'put',
        url: `http://localhost:3002/tvseries/${req.params.id}`,
        data: req.body
      })

      if(updateTvseries) {
        let movies = await axios({
          method: 'get',
          url: `http://localhost:3001/movies`,
        })
        let tvseries = await axios({
          method: 'get',
          url: `http://localhost:3002/tvseries`,
        })
        let dataAll = {
          movies: movies.data.data,
          series: tvseries.data.data
        }

          client.set('entertainme', JSON.stringify(dataAll))
          return res.status(200).json(updateTvseries.data)
      }else {
        res.status(400).json({
          msg: 'failed update Tvseriess',
          error
        }) 
        return  
      }

    } catch (error) {
      res.status(400).json({
        msg: 'failed update  Tvseriess',
        error
      })
    }
  }
}