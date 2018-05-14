const Movie = require('../models/Movie')
const Tag = require('../models/Tag')
const mongoose = require('mongoose')
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

const getMovieById = async (req, res) => {
  try {
    let movies = await Movie.findOne({_id: req.params.id})
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
            $addToSet: {tag: tag._id}
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
const editMovie = async (req, res) => {
  try {
    let movie = await Movie.findOne({_id: req.params.id})
    try {
      let tag = await Tag.findOne({title: req.body.tag})
      if (tag === null) {
        try {
          let newTag = await Tag.create({
            title: req.body.tag
          })
          await movie.update({
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            status: req.body.status,
            tags: [{
              text: req.body.text,
              $addToSet: {tag: newTag._id}
            }],
          })
          res.send({
            message: 'success edit movies',
            status: 201
          })
        } catch (error) {
          res.status(500).json({
            message: error.message
          })
        }
      } else {
        try {
          await movie.update({
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            status: req.body.status
          })
          res.send({
            message: 'success edit movies',
            status: 201
          })
        } catch (error) {
          res.status(500).json({
            message: error.message
          })
        }
      }
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
  // try {
  //   let tag = await Tag.findOne({title: req.body.tag})
  //   try {
  //     if (tag === null) {
  //       let newTag = await Tag.create({
  //         title: req.body.tag
  //       })
  //       await Movie.findOneAndUpdate({
  //         _id: req.params.id
  //       }, {
  //         title: req.body.title,
  //         overview: req.body.overview,
  //         poster_path: req.body.poster_path,
  //         popularity: req.body.popularity,
  //         tags: [{
  //           text: req.body.text,
  //           tag: newTag._id
  //         }],
  //         status: req.body.status
  //       })
  //       res.status(201).json({
  //         message: 'success update data'
  //       })
  //     } else {
  //       await Movie.findOneAndUpdate({
  //         _id: req.params.id
  //       }, {
  //         title: req.body.title,
  //         overview: req.body.overview,
  //         poster_path: req.body.poster_path,
  //         popularity: req.body.popularity,
  //         $push: {tags: [{
  //           text: req.body.text,
  //           tag: tag._id
  //         }]},
  //         status: req.body.status
  //       })
  //       res.status(201).json({
  //         message: 'success update data'
  //       })
  //     }
  //   } catch (err) {
  //     res.status(500).json({
  //       message: err.message
  //     })
  //   }
  // } catch (error) {
  //   res.status(500).json({
  //     message: err.message
  //   })
  // }
}

const deleteMovie = async (req, res) => {
  try {
    let movie = await Movie.findOne({_id: req.params.id})
    try {
      await movie.remove()
      res.status(200).json({
        message: 'success delete data'
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
module.exports = {
  getMovies,
  addMovie,
  editMovie,
  deleteMovie,
  getMovieById
}