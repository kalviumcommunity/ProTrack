// const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const pickerRoute = require('./Routes/picker.route')
let app = express();
let connectToDatabase = require('./db/ConnectDatabase')

app.use(express.json());
app.use(cors());

app.use('/picker' , pickerRoute );

connectToDatabase().then(() => {

    app.listen('8080', () => {
        console.log("server started on 8080")
    })

}
)

 