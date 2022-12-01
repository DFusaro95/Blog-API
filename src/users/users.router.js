const router = require('express').Router()
const userServices = require('./users.services')

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postUser)

router.get('/:id', userServices.getUserByID)

module.exports = router