const express = require('express')
const app = express()
const port = require('../config').api.port
const db = require('./utils/database')
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

app.use(express.json())

db.authenticate() 
  .then(() => console.log('Database authenticated successfully'))
  .catch((err) => console.log(err))

db.sync()
  .then(() => console.log('Database synced successfully'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.status(200).json({message: 'OK'})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})