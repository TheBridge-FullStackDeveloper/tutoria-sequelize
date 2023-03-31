const {User} = require('../models/index')
const bcrypt = require('bcryptjs')

const UserController = {
    async userCreate(req,res){
        try {
            const password = await bcrypt.hash(req.body.password,10)
            const user = await User.create({...req.body,password})
            res.status(201).send({msg:'User created', user})
    
        } catch (error) {
            console.error(error)
            res.send(error)
        }
    }
}
module.exports = UserController