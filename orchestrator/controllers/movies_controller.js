const axios = require('axios'),
      redis = require("redis"),
      client = redis.createClient(),
      { checkCache } = require('../helpers/checkCache')

const getMovies = async (req, res) => {
  try {
    let movies = await axios.get('http://localhost:3001/movies')
    client.set('movies', JSON.stringify(movies.data))
    res.status(200).json({
      data: movies.data
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const addMovie = async (req, res) => {
  try {
    let newMovie = await axios.post('http://localhost:3001/movies', {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      text: req.body.text,
      tag: req.body.tag,
      status: req.body.status
    }, {})
    checkCache('movies', (err, reply) => {
      if (err) {
        res.status(500).json({ message: err.message })
      } else {
        client.del('movies')
        res.status(201).json({
          data: newMovie.data.data
        })
      }
    })
  } catch (error) {
    res.status(201).json({
      message: error.message
    })
  }
}

const deleteMovie = async (req, res) => {
  try {
    await axios.delete('http://localhost:3001/movies/' + req.params.id)
    console.log('masuk')
    checkCache('movies', (err, reply) => {
      if (err) {
        res.status(500).json({ message: err.message })
      } else {
        client.del('movies')
        res.status(201).json({
          message: 'delete data success'
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const editMovie = async (req, res) => {
  try {
    await axios.put('http://localhost:3001/movies/' + req.params.id)
    checkCache('movies', (err, reply) => {
      if (err) {
        res.status(500).json({ message: err.message })
      } else {
        client.del('movies')
        res.status(201).json({
          message: 'edit data success'
        })
      }
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
module.exports = {
  getMovies,
  addMovie,
  deleteMovie,
  editMovie
}