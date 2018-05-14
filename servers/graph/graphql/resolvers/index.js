const axios = require('axios');
const Movie = require('../../../movies/models/movies.model');
const Serie = require('../../../series/models/series.model');

const resolvers = {
  Query: { 
    movies: async () => {
      const response = await axios.get('http://localhost:3001/movies');
      return response.data.data;
    },

    movie: async(_, {id}) => {
      const response = await axios.get('http://localhost:3001/movies');
      const movies = response.data.data;
      const filtered  = movies.filter(item => {
        if (item._id === id){
          return item
        }
      })
      return filtered[0];
    },

    series: async () => {
      const response = await axios.get('http://localhost:3002/series');
      return response.data.data;
    },

    serie: async(_, {id}) => {
      const response = await axios.get('http://localhost:3002/series');
      console.log(series)
      const series = response.data.data;
      const filtered  = series.filter(item => {
        if (item._id === id){
          return item
        }
      })
      return filtered[0];
    },

    getAll: async () => {
      const response = await axios.get('http://localhost:3000/orchestrator');
      const movies = response.data.movies.data;
      const series = response.data.series.data;
      return {movies, series}
    }
  },

  Mutation: {
    createMovie: async (_, args) => {
      const response = await Movie.create({
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        tag: args.tag,
        status: args.status
      });
      return response;
    },

    updateMovie: async (_, args) => {
        const response = await Movie.findById(args._id)
        response._id = args._id
        response.title = args.title||response.title;
        response.overview = args.overview || response.overview;
        response.poster_path = args.poster_path || response.poster_path;
        response.popularity = args.popularity || response.popularity;
        response.tag = args.tag || response.tag;
        response.status = args.status || response.status;
        response.save();
        return response;
    },

    deleteMovie: async(_, args) => {
      const response = await Movie.findByIdAndRemove(args._id);
      return args;
    },
    
    createSerie: async (_, args) => {
      const response = await Serie.create({
        title: args.title,
        overview: args.overview,
        poster_path: args.poster_path,
        popularity: args.popularity,
        tag: args.tag,
        status: args.status
      });
      return response;
    },

    updateSerie: async (_, args) => {
        const response = await Serie.findById(args._id)
        response._id = args._id
        response.title = args.title||response.title;
        response.overview = args.overview || response.overview;
        response.poster_path = args.poster_path || response.poster_path;
        response.popularity = args.popularity || response.popularity;
        response.tag = args.tag || response.tag;
        response.status = args.status || response.status;
        response.save();
        return response;
    },

    deleteSerie: async(_, args) => {
      const response = await Serie.deleteOne({_id: args._id});
      return response;
    }
  }
};

module.exports = resolvers;