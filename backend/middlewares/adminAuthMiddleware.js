const env = require("dotenv");
env.config({path: '../.env'});
const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_KEY;

const adminMiddleware = async(req, res, next) => {
    const token = req.headers.authorization;

    if(token === undefined || token.length === 0){
        res.status(401).json({
            msg: "Authorization header missing!"
        })
    }

    const splitToken = token.split(' ');
    const bearer = splitToken[0];
    const rawToken = splitToken[1];
    console.log(bearer, rawToken);

    try{
        const verifiedToken = jwt.verify(rawToken, JWT_KEY);
        const decodedName = verifiedToken.name;

        if(decodedName){
            next();
        }
        else{
            return res.status(400).json({
                msg: 'Invalid Inputs'
            })
        }
    }
    catch(e){
        return res.status(500).json({
            error: e.message
        })
    }
}

module.exports = adminMiddleware;