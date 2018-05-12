const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const refreshCache = require('../helpers/refreshCache')

const getAllMovies = async (req, res) => {
  try {
    let movies
    if (req.headers.movies_cache) {
      movies = req.headers.movies_cache
    } else {
      movies = await axios.get('http://localhost:3001/movies')
      movies = movies.data.payload
      client.set('movies_cache', JSON.stringify(movies))
    }
    res.status(200).json({
      message: 'getting movies succeed',
      payload: movies
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting movies',
      err: err
    })
  }
}

const getMovieById = async (req, res) => {
  try {
    let movie = await axios.get('http://localhost:3001/movies/' + req.params.id)
    res.status(200).json({
      message: 'getting movie by id succeed',
      payload: movie.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting movie by id',
      err: err
    })
  }
}

const createMovie = async (req, res) => {
  try {
    let newMovie = await axios.post(
      'http://localhost:3001/movies',
      {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      }
    )
    refreshCache('movies_cache')
    res.status(201).json({
      message: 'create new movie succeed',
      payload: newMovie.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail creating new movie',
      err: err
    })
  }
}

const updateMovie = async (req, res) => {
  try {
    let updatedMovie = await axios.put('http://localhost:3001/movies/' +req.params.id, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    })
    refreshCache('movies_cache')
    res.status(200).json({
      message: 'update movie succeed',
      payload: updatedMovie
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail to update movie',
      err: err
    })
  }
}

const deleteMovie = async (req, res) => {
  try {
    let deletedMovie = await axios.delete('http://localhost:3001/movies/' + req.params.id)
    refreshCache('movies_cache')
    res.status(200).json({
      message: 'delete movie succeed',
      payload: deletedMovie
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail to delete movie',
      err: err
    })
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
}