const Movie = require('../Models/Movies')
const Tag = require('../Models/Tags')

const getAllMovies = async (req, res) => {
  try {
    let movies = await Movie.find().populate('tags')
    res.status(200).json({
      message: 'Get all movies succeed',
      payload: movies
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting all movies',
      err: err
    })
  }
}

const createMovie = async (req, res) => {
  try {
    let foundTag = await Tag.findOne({
      text: req.body.tag
    })
    console.log('isFound', foundTag)
    if(foundTag === null) {
      //tag not found 
      try { //create new tag
        let newTag = await Tag.create({
          text: req.body.tag
        })
        console.log('crate new tag',newTag)
        try {
          let newMovie = await Movie.create({
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            status: req.body.status,
            tags: newTag._id
          })
          console.log(newMovie)
          res.status(201).json({
            message: 'create mov  ie succeed',
            payload: newMovie
          })
        } catch (createMovieError) {
          res.status(500).json({
            message: 'fail creating new movie',
            err: createMovieError
          })
        }
      } catch (createTagError) {
        res.status(500).json({
          message: 'fail creating new tags',
          err: createTagError
        })
      }
    } else {
      //tag is found
      try {
        let newMovie = await Movie.create({
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          status: req.body.status,
          tags: foundTag._id
        })
        res.status(201).json({
          message: 'create movie succeed',
          payload: newMovie
        })
      } catch (createMovieError) {
        res.status(500).json({
          message: 'fail creating new movie',
          err: createMovieError
        })
      }
    }
  } catch (getTagError) {
    res.status(500).json({
      message: 'fail getting tags',
      err: getTagError
    })
  }
}

 
module.exports = {
  getAllMovies,
  createMovie
}