const TVSeries = require('../models/TVSeries')
const Tag = require('../models/Tag')

const getTVSeries = async (req, res) => {
  try {
    let getTVSeries = await TVSeries.find()
    res.status(200).json({
      message: 'success get data tv series',
      data: getTVSeries
    })
  } catch (error) {
    res.status(500).json({
      message: err.message
    })
  }
}

const addTVSeries = async (req, res) => {
  try {
    let tag = await Tag.find({title: req.body.tag})
    if(tag === null) {
      try {
        let newTag = await Tag.create({
          title: req.body.tag
        })
        try {
          let newTVSeries = await TVSeries.create({
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
            message: 'success add tv series',
            data: newTVSeries
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
        let newTVSeries = await TVSeries.create({
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
          message: 'success add TV Series',
          data: newTVSeries
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

const editTVSeries = async (req, res) => {
  try {
    let tvSeries = await TVSeries.findOne({_id: req.params.id})
    try {
      let tag = await Tag.findOne({title: req.body.tag})
      if (tag === null) {
        try {
          let newTag = await Tag.create({
            title: req.body.tag
          })
          await TVSeries.update({
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
            message: 'success edit tv series',
            status: 201
          })
        } catch (error) {
          res.status(500).json({
            message: error.message
          })
        }
      } else {
        try {
          await tvSeries.update({
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            status: req.body.status
          })
          res.send({
            message: 'success edit tv series',
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
}

const deleteTVSeries = async (req, res) => {
  try {
    let tvSeries = await TVSeries.findOne({_id: req.params.id})
    try {
      await tvSeries.remove()
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
  getTVSeries,
  addTVSeries,
  editTVSeries,
  deleteTVSeries
}
  