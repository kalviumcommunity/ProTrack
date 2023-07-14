
const { verifyToken , getUser } = require('./../Controller/user.controller');


async function AuthMiddleware(  req , res , next ){
    try {

        const headers = req.headers;
 
        let token = headers['authorization'];
       

        if(token){

            token = token.split(" ").pop();

            let payload = verifyToken(token);             // throw error if token not verified

            let usr = getUser(payload._id);
    
            req.loggedinuser = usr;

            console.log(req);

            next();
            

        }else {
            console.log("User Not logged in");
             return res.send({ message : "User not logged in"});
        }

    }catch ( err ){
        console.log(err.message);
        return res.status(500).send( err.message );
    }
}

module.exports = AuthMiddleware;