const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.post('/userCreate',UserController.userCreate)

module.exports=router

