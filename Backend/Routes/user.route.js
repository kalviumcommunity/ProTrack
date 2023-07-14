const express = require('express');
const {register , login } = require('./../Controller/user.controller');
const userRoute = express.Router();


userRoute.post('/register' , async (req , res ) => {
    try {
        let usr = req.body;

        let dta = await register(usr);

        res.send(dta);

    }catch (err) {
        console.error(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
})


userRoute.post('/login' , async ( req , res ) => {
    try {
        
        let usr = req.body;

        let dta = await login(usr);

        res.send(dta);


    }catch (err) {
        console.error(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
})



module.exports = userRoute;
