const express = require('express');
const router = express.Router()


const Characters = require('./character-model');

router.get('/', ( req, res)=>{
    res.status(200).json({
        message: `It is working great`
        // Characters.find()
    })
})





module.exports = router;