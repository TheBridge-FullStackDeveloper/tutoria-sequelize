const express = require('express')
const app = express()
const PORT = 8080
app.use(express.json())
app.use('/rooms', require('./routes/rooms'))
app.use('/users',require('./routes/users'))





app.listen(PORT,()=> console.log(`Server started in Port ${PORT}`))


