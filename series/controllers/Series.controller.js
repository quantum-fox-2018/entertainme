const Seri = require('../Models/Series')
const Tag = require('../Models/Tags')

const getAllSeries = async (req, res) => {
  try {
    let series = await Seri.find().populate('tags')
    res.status(200).json({
      message: 'Get all series succeed',
      payload: series
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting all series',
      err: err
    })
  }
}

const getSeriById = async (req, res) => {
    try {
      let seri = await Seri.findById(req.params.id)
      res.status(200).json({
        message: 'get seri by id succeed',
        payload: seri
      })
    } catch (err) {
      res.status(500).json({
        message: 'fail to get seri by id',
        err: err
      })
    }
}

const createSeri = async (req, res) => {
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
          let newSeri = await Seri.create({
            title: req.body.title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            popularity: req.body.popularity,
            status: req.body.status,
            tags: newTag._id
          })
          console.log(newSeri)
          res.status(201).json({
            message: 'create seri succeed',
            payload: newSeri
          })
        } catch (createSeriError) {
          res.status(500).json({
            message: 'fail creating new seri',
            err: createSeriError
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
        let newSeri = await Seri.create({
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          status: req.body.status,
          tags: foundTag._id
        })
        res.status(201).json({
          message: 'create seri succeed',
          payload: newSeri
        })
      } catch (createSeriError) {
        res.status(500).json({
          message: 'fail creating new seri',
          err: createSeriError
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

const updateSeri = async (req, res) => {
  try {
    let updatedSeri = await Seri.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
    res.status(200).json({
      message: 'update Seri succeed',
      payload: updatedSeri
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail to update Seri',
      err: err
    })
  }
}

 const deleteSeri = async(req, res) => {
    try {
      let deletedSeri = await Seri.findByIdAndRemove(req.params.id)
      res.status(200).json({
        message: 'delete Seri succeed',
        payload: deletedSeri
      })
    } catch (err) {
      res.status(500).json({
        message: 'fail to delete Seri',
        err: err
      })
    }
  }

module.exports = {
  getAllSeries,
  getSeriById,
  createSeri,
  updateSeri,
  deleteSeri
}