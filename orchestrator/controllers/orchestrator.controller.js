const axios = require('axios');
const cache = require('../helpers/helpercache');

const getAll = async (req, res) => {
  try {
    const movies = await axios.get('http://localhost:3002/movies');
    const series = await axios.get('http://localhost:3001/series');
    const result = {
      movies: movies.data,
      series: series.data
    }
    cache(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500)
      .json({
        message:'something went wrong'
      });
  }
}

const getMovies = async (req, res) => {
  try {
    const movies = await axios.get('http://localhost:3002/movies');
    res.status(200).json(movies.data);
  } catch (error) {
    res.status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

const addMovie = async (req, res) => {
  try {
    const movie = await axios.post('http://localhost:3002/movies', {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    });
    res.status(200).json({
      message: 'movie inserting successfully',
      data: movie.data
    });
    getAll(req, res);
  } catch (error) {
    res.status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

const updateMovie = async (req, res) => {
  try {
    const movie = await axios.put(`http://localhost:3002/movies/${req.params.id}`, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    });
    res.status(200)
      .json({
        message: 'movie updating successfully',
        data: movie.data
      });
    getAll(req, res);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

const deleteMovie = async (req, res) => {
  try {
    const movie = await axios.delete(`http://localhost:3002/movies/${req.params.id}`);
    res.status(200)
      .json({
        message: 'movie deleting successfully',
        data: movie.data
      });
    getAll(req, res);
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'something went wrong'
      });
  }
}

const getSeries = async(req, res) => {
  try {
    const series = await axios.get('http://localhost:3001/series');
    res
      .status(200)
      .json(series.data);
  } catch (error) {
    res
      .status(500)
      .json({message: 'something went wrong'});
  }
}

const addSerie = async(req, res) => {
  try {
    const serie = await axios.post('http://localhost:3001/series', {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    });
    res.status(200)
      .json({message: 'serie inserting successfully', data: serie.data});
    getAll(req, res);
  } catch (error) {
    res
      .status(500)
      .json({message: 'something went wrong'});
  }
}

const updateSerie = async(req, res) => {
  try {
    const serie = await axios.put(`http://localhost:3001/series/${req.params.id}`, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    });
    res.status(200)
      .json({message: 'serie updating successfully', data: serie.data});
    getAll(req, res);
  } catch (error) {
    res.status(500)
      .json({message: 'something went wrong'});
  }
}

const deleteSerie = async(req, res) => {
  try {
    const serie = await axios.delete(`http://localhost:3001/series/${req.params.id}`);
    res.status(200)
      .json({message: 'serie deleting successfully', data: serie.data});
    getAll(req, res);
  } catch (error) {
    res
      .status(500)
      .json({message: 'something went wrong'});
  }
}

module.exports = {
  getAll,
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getSeries,
  addSerie,
  updateSerie,
  deleteSerie
}