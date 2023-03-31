const {Room} = require('../models/index')

const RoomController ={

async create(req,res) {
    try {
        const room = await Room.create(req.body)
        res.status(201).send({msg:'Room created', room})
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}





}

module.exports = RoomController