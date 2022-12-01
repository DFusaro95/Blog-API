const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
  userControllers.findAllUsers()
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => {
    res.status(400).json({message: err.message})
  })
}

const getUserByID = (req, res) => {
  const id = req.params.id
  userControllers.findUserByID(id)
    .then((data) => {
      if(data){
        res.status(200).json(data)
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

const postUser = (req, res) => {
  const { first_name, last_name, username, email, password, age, country } = req.body
  userControllers.createUser({ first_name, last_name, username, email, password, age, country })
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
        fields: {
          first_name: 'string',
          last_name: 'string',
          username: 'string',
          email: 'string',
          password: 'string',
          edad: 'number',
          country: 'ARG'
        }
      })
    })
}

module.exports = {
  getAllUsers,
  getUserByID,
  postUser
}