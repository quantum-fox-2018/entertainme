const Movie = require('../models/Movie')
const Tag = require('../models/Tag')

const getMovies = async (req, res) => {
  try {
    let movies = await Movie.find()
    res.status(200).json({
      message: 'success get data movies',
      data: movies
    })
  } catch (error) {
    res.status(500).json({
      message: err.message
    })
  }
}

const addMovie = async (req, res) => {
  console.log(req.body)
  try {
    let tag = await Tag.find({title: req.body.tag})
    if(tag === null) {
      try {
        let newTag = await Tag.create({
          title: req.body.tag
        })
        try {
          let newMovie = await Movie.create({
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            tags: [{
              text: req.body.text,
              tag: newTag._id
            }],
            status: req.body.status
          })
          res.status(201).json({
            message: 'success add movie',
            data: newMovie
          })
        } catch (error) {
          res.status(500).json({
            message: err.message
          })
        }
      } catch (error) {
        res.status(500).json({
          message: err.message
        })
      }
    } else {
      try {
        let newMovie = await Movie.create({
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          tags: [{
            text: req.body.text,
            tag: tag._id
          }],
          status: req.body.status
        })

        res.status(201).json({
          message: 'success add movie',
          data: newMovie
        })
      } catch (error) {
        res.status(500).json({
          message: err.message
        })
      }
    }
  } catch (error) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  getMovies,
  addMovie
}