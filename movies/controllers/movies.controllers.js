const Movie = require('../models/Movie')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getAll: async(req, res) => {
    if (req.headers.cache) {
      res.status(200).json({
        message: 'movies fetched loh',
        movie: req.headers.cache
      })
    } else {
      try {
        let movies = await Movie.find()
        client.set('movies', JSON.stringify(movies))
        res.status(200).json({
          message: 'movies fetched',
          movie: movies
        })
      } catch (err) {
        res.status(500).json({
          message: 'unable to fetch movies',
          err
        })
      }
    }
  },
  moviebyid: async (req, res) => {
     try {
       let movie = await Movie.findById(req.params.id)
       res.status(200).json({
         message: 'movie fetcheddd',
         movie: movie
       })
     } catch (err) {
       res.status(500).json({
         message: 'unable to fetch movies',
         err
       })
     }
   },
  addMovie: async(req, res) => {
    try {
      let addMovie = await Movie.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        // tag: req.body.tag
      })
      if (req.headers.cache) {
        req.headers.cache.push(addMovie)
        client.set('movies', JSON.stringify(req.headers.cache))
      }
      res.status(200).json({
        message: 'movie added',
        addMovie
      })
    } catch (err) {
      res.status(500).json({
        message: 'unable to add movie',
        err
      })
    }
  },
  updateMovie: (req, res) => {
    Movie.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
      .exec()
      .then(data => {
        res.status(200).json({
          message: 'updated',
          data
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to update',
          err
        })
      })
  },
  deleteMovie: (req, res) => {
    Movie.findByIdAndRemove(req.params.id)
      .exec()
      .then(data => {
        res.status(200).json({
          message: 'deleted',
          data
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to delete',
          err
        })
      })
  }
}
