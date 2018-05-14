const Serie = require('../models/series.model');

const read = async (req, res) => {
  try {
    const series = await Serie.find().populate('tag');
    res.status(200).json({
      message: 'series found successfully',
      data: series
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong',
      error: error.message
    });
  }
}

const create = async (req, res) => {
  try {
    const create = await Serie.create({
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    });
    res.status(200).json({
      message: 'serie added successfully',
      data: create
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong'
    });
  }
}

const update = async(req, res) => {
  try {
    const update = await Serie.updateOne({
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
    res
      .status(200)
      .json({message: 'serie update successfully', data: update});
  } catch (error) {
    res
      .status(500)
      .json({message: 'something went wrong'});
  }
}

const deletes = async(req, res) => {
  try {
    const deletes = await Serie.deleteOne({_id: req.params._id});
    res
      .status(200)
      .json({message: 'serie delete successfully', data: deletes});
  } catch (error) {
    res
      .status(500)
      .json({message: 'someting went wrong'});
  }
}

module.exports = {
  read,
  create,
  update,
  deletes
};