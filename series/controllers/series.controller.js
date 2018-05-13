const TVSerie = require('../models/TVSerie');

const getTVSeries = async (req, res) => {
  try {
    const tVSeries = await TVSerie.find()
    res.send(200, {
      info: 'tv series found successfully',
      data: tVSeries
    })
  } catch (error) {
    res.send(500, {
      info: 'error occured while getting data'
    })
  }
}

module.exports = {
  getTVSeries
};