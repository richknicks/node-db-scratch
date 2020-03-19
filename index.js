require('dotenv').config()
// console.log('env', process.env)

const server = require('./api/server.js');

const PORT = process.env.PORT || 5775

server.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})