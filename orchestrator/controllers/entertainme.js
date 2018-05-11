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
  },
  addMovie: async (req, res, next) => {
    try {
      let movie = await axios.post('http://localhost:3001/movies', {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      })
      res.status(201).json({
        message: 'added new movie',
        data: movie.data
      })
      next()
    } catch (error) {
      res.status(500).json({
        message: 'error add',
        error
      })
    }
  },
  addSeries: async (req, res, next) => {
    try {
      let series = await axios.post('http://localhost:3002/series', {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      })
      res.status(201).json({
        message: 'added new series',
        data: series.data
      })
      next()
    } catch (error) {
      res.status(500).json({
        message: 'error add',
        error
      })
    }
  },
  updateMovie: async (req, res, next) => {
    try {
      let movie = await axios.put('http://localhost:3001/movies/'+req.params._id, req.body)
      res.status(200).json({
        message: 'update success',
        data: movie.data
      })
      next()
    } catch (error) {
      res.status(500).json({
        message: 'error',
        error
      })
    }
  },
  updateSeries: async (req, res, next) => {
    try {
      let series = await axios.put('http://localhost:3002/series/'+req.params._id, req.body)
      res.status(200).json({
        message: 'update success',
        data: series.data.data
      })
      next()
    } catch (error) {
      res.status(500).json({
        message: 'error',
        error
      })
    }
  },
  delMovie: async (req, res, next) => {
    try {
      await axios.delete('http://localhost:3001/movies/'+req.params._id)
      res.status(200).json({
        message: 'delete success'
      })
      next()
    } catch (error) {
      res.status(500).json({
        message: 'error',
        error
      })
    }
  },
  delSeries: async (req, res, next) => {
    try {
      await axios.delete('http://localhost:3002/series/'+req.params._id)
      res.status(200).json({
        message: 'delete success'
      })
      next()
    } catch (error) {
      res.status(500).json({
        message: 'error',
        error
      })
    }
  }
}