const axios = require('axios')

const tvResolver = {
  Query: {
    tvSeries: async () => {
      try {
        const tv = await axios.get('http://localhost:3002/tv')
        return tv.data
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    },

    tvSerie: async (_, {_id}) => {
      try {
        const tv = await axios.get('http://localhost:3002/tv/' + _id)
        return tv.data
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    } 
  },
  Mutation: {
    addTv: async (_, {title, overview, poster_path, popularity}) => {
      try {
        const addedTv = await axios.post('http://localhost:3002/tv', {
          title, overview, poster_path, popularity
        })
        return addedTv.data
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    },
    updateTv: async (_, {_id, title, overview, poster_path, popularity}) => {
      try {
        const updatedTv = await axios.put('http://localhost:3002/tv/' + _id, {
          title, overview, poster_path, popularity
        })
        return updatedTv.data
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    },
    deleteTv: async(_, {_id}) => {
      try {
        const deletedTv = await axios.delete('http://localhost:3002/tv/' + _id)
        return deletedTv.data
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    }
  }
}