const express = require('express');
const router = express.Router()


const Characters = require('./character-model');

router.get('/', ( req, res)=>{
    Characters.find()
    .then(character=>{
        res.status(200).json(character)
    })
    .catch(error=>{
        res.status(500).json({
        error: `This is an error ${error}`})
    })
    })






module.exports = router;