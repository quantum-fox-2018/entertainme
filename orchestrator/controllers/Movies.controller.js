const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getAllMovies = async (req, res) => {
  try {
    let movies = await axios.get('http://localhost:3001/movies')
    res.status(200).json({
      message: 'getting movies succeed',
      payload: movies.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting movies',
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
      },
      {}
    )
    client.get('data', function (err, reply) {
        if (reply !== null) {
          client.del('data')
        }
    })
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

module.exports = {
  getAllMovies,
  createMovie
}