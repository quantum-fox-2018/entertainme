const Movie = require('../models/movies.model');

const read = async (req, res) => {
  try {
    const movies = await Movie.find().populate('tag');
    res.status(200).json({
      message: 'movie found successfully',
      data: movies
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong'
    });
  }
}

const create = async (req, res) => {
  // console.log('masuk boss')
  try {
    const create = await Movie.create({
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: [],
      status: req.body.status
    });
    res.status(200).json({
      message: 'movie added successfully',
      data: create
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

const update = async (req, res) => {
  try {
    const update = await Movie.updateOne({
      _id: req.params._id
    }, {
      $set: {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      }
    });
    res.status(200).json({
      message: 'movie update successfully',
      data: update
    });
  } catch (error) {
    res.status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

const deletes = async (req, res) => {
  try {
    const deletes = await Movie.deleteOne({
      _id: req.params._id
    });
    res.status(200).json({
      message: 'movie delete successfully',
      data: deletes
    });
  } catch (error) {
    res.status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

module.exports = {
  read,
  create,
  update,
  deletes
}