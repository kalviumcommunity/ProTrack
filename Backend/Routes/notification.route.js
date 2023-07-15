const express = require('express')
const {addNotification , getNotification  , deleteNotification , updateNotification } = require('./../Controller/notification.controller');
const notificationRouter = express.Router();


notificationRouter.post('/add' , async ( req , res ) => {
    try {

        let data = req.body;
        let Ndata = await addNotification(data);
        res.send(Ndata)

    }catch (err){
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
   
})


notificationRouter.get('/get' , async ( req , res ) => {
    try {

        let Ndata = await getNotification();
        res.send(Ndata)

    }catch (err){
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
   
})


notificationRouter.delete('/delete' , async ( req , res ) => {
    try {
        let id = req.body.id;
        let Ndata = await deleteNotification(id);
        res.send(Ndata)

    }catch (err){
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
   
})

notificationRouter.patch('/update' , async ( req , res ) => {
    try {
        let dta = req.body;
        let Ndata = await updateNotification(dta);
        res.send(Ndata)

    }catch (err){
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
   
})

module.exports = notificationRouter;