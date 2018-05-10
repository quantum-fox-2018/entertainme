const axios = require('axios')

const refreshCache = () =>{
  axios.post('http://localhost:3000/entertainme/refresh-cache')
    .then((result) => {
      console.log('Success refresh Series cache')
    }).catch((err) => {
      console.log('Failed refresh Series cache')
    });
}

module.exports = refreshCache