const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  addMovie: async (req, res) => {
    try {
      let input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status 
      }
      let movies = await axios({
        method: 'post',
        url: 'http://localhost:3001/movies',
        data: input
      })

      console.log('new movies==', movies)
      if(movies) {
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
          console.log('new movies==', movies, "-============")
          return res.status(200).json("success add new movie")
      }else {
        res.status(400).json({
          msg: 'failed add movies',
          error
        }) 
        return  
      }

    } catch (error) {
      res.status(400).json({
        msg: 'failed add movies',
        error
      })
    }
  },
  removeMovie: async (req, res) => {
    try {
      let deletedMovies = await axios({
        method: 'delete',
        url: `http://localhost:3001/movies/${req.params.id}`,
      })
      console.log('remove===', deletedMovies)
      if(deletedMovies) {
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
          return res.status(200).json(deletedMovies.data)
      }else {
        res.status(400).json({
          msg: 'failed remove movies',
          error
        }) 
        return  
      }

    } catch (error) {
      res.status(400).json({
        msg: 'failed remove movies',
        error
      })
    }
  },
  updateMovie: async (req, res) => {
    try {
      let updateMovies = await axios({
        method: 'put',
        url: `http://localhost:3001/movies/${req.params.id}`,
        data: req.body
      })

      if(updateMovies) {
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
          return res.status(200).json(updateMovies.data)
      }else {
        res.status(400).json({
          msg: 'failed update movies',
          error
        }) 
        return  
      }

    } catch (error) {
      res.status(400).json({
        msg: 'failed update  movies',
        error
      })
    }
  }
}