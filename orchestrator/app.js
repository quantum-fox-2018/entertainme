const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000

const router = require('./routes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/', router)

app.use((req, res) => {
  res.status(404).json({
    message: 'Error 404: Endpoint not found'
  })
})

app.listen(port, function() {
 console.log('Orchestrator is running on port', port)
})