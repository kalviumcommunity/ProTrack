const mongoose = require('mongoose');
const User = require('./../Models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();


function generateToken(user){

    let jwtsecret = process.env.JWT_SECRET;
    let token = jwt.sign( user , jwtsecret )

    return token;

}

function verifyToken( token ){

    let payload = jwt.verify( token , process.env.JWT_SECRET );

    return payload;

}

async function getUser(id) {
    
    let usr = await User.findOne({ _id: id } );
    
    usr = usr.toJSON();

    delete usr.password;

    return usr;
} 

async function register ( usr ){
    let dta = await User.create(usr);

    return dta;
}

async function login ( usr ){

    let dta = await User.findOne({ user_id : usr.user_id });

    if( dta.password == usr.password ) {
        
        let user = dta.toJSON();

        delete user.password;

        let token = generateToken(user);

        return { token , user };

    }else {
        return { message : "wrong credentials"};
    }
}


module.exports = {
    register,
    login,
    verifyToken,
    getUser
}