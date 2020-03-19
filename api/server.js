const express = require('express');
const helmet = require('helmet')
const morgan = require("morgan")
const cors = require('cors')
const server = express();

const charcterRouter = require('../auth/character-router');
server.use(express.json());
server.use("/api/characters", charcterRouter);
server.use(helmet())
server.use(morgan("dev"))
server.use(cors())

server.get('/', (req,res)=>{
    res.status(200).json({
        message: `It is working`
    })
})

module.exports = server;