const express = require('express')
const RoomController = require('../controllers/RoomController')
const router = express.Router()

router.post('/create', RoomController.create)

module.exports = router