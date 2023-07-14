const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name : String,
    user_id : String,
    password : String

})


const User = new mongoose.model('AuthUser' , userSchema );

module.exports = User;