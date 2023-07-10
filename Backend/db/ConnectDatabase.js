const mongoose = require('mongoose');
require('dotenv').config();


async function ConnectDataBase() {
    try {

        await mongoose.connect(process.env.DB_CONNECTION_URL);
        console.log("Connected to Database");

    }catch (err){

        console.log(err.message, 'Could not connect to database')

   }

}

module.exports =  ConnectDataBase;