const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getAllEntertainment: async (req, res) => {
    try {
      // kalo movies cache ny ada
      let movies, series;
      if (req.headers.moviesCache) {
        movies = req.headers.moviesCache
      } else {
        movies = await axios.get('http://localhost:3001/movie')
        movies = movies.data
        // set movies data to redis / cache memory
        client.set('movies', JSON.stringify(movies))
        client.expire('movies', 500) // delete data after 500 seconds
      }

      // kalo series cache ny ad 
      if (req.headers.seriesCache) {
        series = req.headers.seriesCache
      } else {
        series = await axios.get('http://localhost:3002/tv')
        series = series.data
        // set series data to redis / cache memory
        client.set('tvSeries', JSON.stringify(series))
        client.expire('tvSeries', 500) // delete data after 500 seconds
      }
            
      res.send({
        message: 'get All Entertainment Succes',
        movies: movies,
        series: movies
      })

    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })  
    }
  },
  /*================ Movies ================= */
  addNewMovies: async (req, res) => {
    try {
      let newMovies = await axios.post('http://localhost:3001/movie', req.body)
      console.log('body', req.body)
      console.log('new Movies', newMovies)
      res.send(newMovies.data)
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  updateMovie: async (req, res) => {
    try {
      let movieId = req.params.id
      let updatedMovie = await axios.put(`http://localhost:3001/movie/${movieId}`, req.body)
      console.log('Movie ID ==>', movieId)
      console.log(updatedMovie)
      res.send(updatedMovie.data)
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  deleteMovie: async (req, res) => {
    try {
      let movieId = req.params.id
      let deletedMovie = await axios.delete(`http://localhost:3001/movie/${movieId}`)
      res.send(deletedMovie.data)
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  /*================ Tv Series ================= */
  addNewSeries: async (req, res) => {
    try {
      let newSeries = await axios.post('http://localhost:3002/tv', req.body)
      res.send(newSeries.data)
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  updateSeries: async (req, res) => {
    try {
      let tvSeriesId = req.params.id
      let updatedSeries = await axios.put(`http://localhost:3002/tv/${tvSeriesId}`, req.body)
      console.log(updatedSeries)
      res.send(updatedSeries.data)
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  },
  deleteSeries: async (req, res) => {
    try {
      let tvSeriesId = req.params.id
      let deletedSeries = await axios.delete(`http://localhost:3002/tv/${tvSeriesId}`)
      res.send(deletedSeries.data)
    } catch (error) {
      console.log(error)
      res.send({
        message: 'Something went wrong',
        status: 500
      })
    }
  }
}