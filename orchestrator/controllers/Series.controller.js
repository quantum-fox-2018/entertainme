const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const refreshCache = require('../helpers/refreshCache')

const getAllSeries = async (req, res) => {
  try {
    let series
    if(req.headers.series_cache) {
      series = req.headers.series_cache
    } else {
      series = await axios.get('http://localhost:3002/series')
      series = series.data.payload
      client.set('series_cache', JSON.stringify(series))
    }
    res.status(200).json({
      message: 'getting series succeed',
      payload: series
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting series',
      err: err
    })
  }
}

const getSeriById = async (req, res) => {
  try {
     let seri = await axios.get('http://localhost:3002/series/' + req.params.id)
     res.status(200).json({
       message: 'getting seri by id succeed',
       payload: seri.data.payload
     })
  } catch (err) {
    res.status(500).json({
      message: 'fail getting seri by id',
      err: err
    })
  }
} 

const createSeri = async (req, res) => {
  try {
    let newSeri = await axios.post(
      'http://localhost:3002/series/',
      {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      }
    )
    refreshCache('series_cache')
    res.status(201).json({
      message: 'create new seri succeed',
      payload: newSeri.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail creating new seri',
      err: err
    })
  }
}

const updateSeri = async (req, res) => {
  try {
    let updatedSeri = await axios.put('http://localhost:3002/series/' + req.params.id, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    })
    refreshCache('series_cache')
    res.status(200).json({
      message: 'update seri succeed',
      payload: updatedSeri.data.payload
    })

  } catch (err) {
    res.status(500).json({
      message: 'fail to update seri',
      err: err
    })
  }
}

const deleteSeri = async (req, res) => {
  try {
    let deletedSeri = await axios.delete('http://localhost:3002/series/' + req.params.id)
    refreshCache('series_cache')
    res.status(200).json({
      message: 'delete seri succeed',
      payload: deletedSeri.data.payload
    })
  } catch (err) {
    res.status(500).json({
      message: 'fail to delete seri',
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