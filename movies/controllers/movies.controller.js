const Movies = require('../models/movies')

module.exports = {
  getMovies: async (req, res) => {
    try {
      let data = await Movies.find()
      res.status(200).json({
        message: 'success get movies data',
        data
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed get data',
        error
      }) 
    }
  },
  addMovies: async (req, res) => {
    try {
      let input = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status 
      }
      let addNewMovies  = await Movies.create(input)
      res.status(200).json({
        message: 'success add new movies data',
        data: input
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed add movies',
        error
      })
    }
  },
  removeMovie: async (req, res) => {
    try {
      await Movies.findByIdAndRemove(req.params.id)
      res.status(200).json({
        message: 'success delete movie'
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed remove movie',
        error
      })
    }
  },
  updateMovie: async (req, res) => {
    try {
      let id = {_id: req.params.id}
      let data = await Movies.findByIdAndUpdate(id, req.body)
      res.status(201).json({
        message: 'success update data',
        data
      })
    } catch (error) {
      res.status(400).json({
        message: 'failed update movie',
        error
      })
    }
  }
}