const express = require('express');
const { addPicker , getPicker , changeShift , startShift , changeTask  } = require('./../Controller/picker.controller');

const pickerRoute = express.Router();


pickerRoute.post('/addpicker' , async (req , res ) => {
    try {

        const pkr = req.body;

        const picker = await addPicker(pkr);

        res.send(picker);


    }catch (err) {
        console.error(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
});


pickerRoute.get('/getpicker' , async ( req , res ) => {
    try {
        
        let pkr = await getPicker()

        res.send(
            pkr
        )

    }catch (err){
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    }
})


pickerRoute.patch('/changeshift' , async ( req , res ) => {
    try {

        const { id }  = req.query;
        const {shift} = req.body;

        let tsk = await changeShift ( id , shift );

        res.send( tsk ) ;


    }catch(err) {
        console.error(err.message);
    }
} )


pickerRoute.patch('/startshift' , async ( req , res ) => {
    try {

        const { id }  = req.query;
        const { shift_status ,shift} = req.body;

        let tsk = await startShift (shift_status ,id , shift );

        res.send( tsk ) ;


    }catch(err) {
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    
    }
} )

pickerRoute.patch('/changetask' , async ( req , res ) => {
    try {  

        const { id }  = req.query;
        const { pendinghu , updatedhu ,  current_task ,  parameter , task } = req.body;

        let tsk = await changeTask ( pendinghu , updatedhu , current_task , parameter , id , task );

        res.send( tsk ) ;
 

    }catch(err) {
        console.log(err.message);
        return res.status(500).send({
            error : err.message
        })
    
    }
} )



module.exports = pickerRoute;