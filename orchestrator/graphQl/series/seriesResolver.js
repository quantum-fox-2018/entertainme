const axios = require('axios')

const seriesResolver = {
  Query: {
    series: async () => {
      try {
        const series = await axios.get('http://localhost:3002/tv')
        return series.data.data
      } catch (error) {
        console.log('Get Error ===>', error)
      }
    },
    tvSeries: async (_, {_id}) => {
      try {
        const series = await axios.get('http://localhost:3002/tv/'+_id)
        return series.data.data
      } catch (error) {
        console.log('Get Error ===>', error)
      }
    }
  },
  Mutation: {
    addSeries: async (_, {title, overview, poster_path, popularity}) => {
      try {
        const addedSeries = await axios.post('http://localhost:3002/tv',{
          title, overview, poster_path, popularity
        })
        console.log(addedSeries.data)
        return addedSeries.data.data
      } catch (error) {
        console.log('Post Error ===>', error)
      }
    },
    updateSeries: async (_, {_id, title, overview, poster_path, popularity}) => {
      try {
        const updatedSeries = await axios.put('http://localhost:3002/tv/'+_id,{
          title, overview, poster_path, popularity
        })
        console.log(updatedSeries.data)
        return updatedSeries.data.data
      } catch (error) {
        console.log('Post Error ===>', error)
      }
    },
    deleteSeries: async(_, {_id}) => {
      try {
        const deletedSeries = await axios.delete('http://localhost:3002/tv/'+_id)
        console.log(deletedSeries)
        return deletedSeries
      } catch (error) {
        console.log('Post Error ===>', error)
      }
    }
  }
} 

module.exports = seriesResolver
