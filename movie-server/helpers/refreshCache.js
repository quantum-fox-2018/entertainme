const axios = require('axios')

const refreshCache = () =>{
  axios.post('http://localhost:3000/entertainme/refresh-cache')
    .then((result) => {
      console.log('Success refresh Movies cache')
    }).catch((err) => {
      console.log('Failed refresh Movies cache')
    });
}

module.exports = refreshCache