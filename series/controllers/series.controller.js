const series = require('../models/series.model');

const read = async (req, res) => {
  try {
    const series = await series.find().populate('tag');
    res.status(200).json({
      info: 'tv series found successfully',
      data: series
    });
  } catch (error) {
    res.status(500).json({
      info: 'error occured while getting data'
    });
  }
}

const create = async (req, res) => {
  try {
    const create = await series.create({
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    });
    res.status(200).json({
      info: 'tv serie added successfully',
      data: create
    });
  } catch (error) {
    res.status(500).json({
      info: 'error occured while adding data'
    });
  }
}

const update = async(req, res) => {
  try {
    const update = await series.updateOne({
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
      .json({info: 'tv serie update successfully', data: update});
  } catch (error) {
    res
      .status(500)
      .json({info: 'error occured while updating data'});
  }
}

const deletes = async(req, res) => {
  try {
    const deletes = await series.deleteOne({_id: req.params._id});
    res
      .status(200)
      .json({info: 'tv serie delete successfully', data: deletes});
  } catch (error) {
    res
      .status(500)
      .json({info: 'error occured while deleting data'});
  }
}

module.exports = {
  read,
  create,
  update,
  deletes
};