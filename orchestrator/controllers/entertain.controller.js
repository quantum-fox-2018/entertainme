const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getAllData: async (req, res) => {
    if(req.status) {
      res.status(200).json({
        msg: 'success get all data',
        data: req.dataAll
      })
    }else {
      try {
        let movies = await axios({
          method: 'get',
          url: 'http://localhost:3001/movies'
        })
        let tvseries = await axios({
          method: 'get',
          url: 'http://localhost:3002/tvseries'
        })
  
        console.log('movies==', movies, 'tv series---', tvseries)
  
        let dataAll ={
          movies: movies.data,
          series: tvseries.data
        }
  
        client.set('entertainme', JSON.stringify(dataAll))
        res.status(200).json({
          msg: 'success get all data',
          data: dataAll
        })
      } catch (error) {
        res.status(400).json({
          msg: 'failed get data',
          error
        })
      }
    }
  }
}