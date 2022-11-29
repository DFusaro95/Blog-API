const express = require('express')
const app = express()
const port = require('../config').api.port
app.use(express.json())



app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})