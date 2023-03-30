const jwt = require('jsonwebtoken');

const auth =  (req,res,next) =>{
    const token =   req.headers.cookie;
    if(!token){
        console.log('no token')
        return res.status(400).end()
    }
    console.log(token)
    next()
}

module.exports = auth
