const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config({path: '../.env'});

//creation of admin
const adminSignUpController = async(req, res) => {
    try{
        const name = req.headers.name;
        const password = req.headers.password;
        const saltedRounds = 10;

        const adminAlreadyExists = await Admin.findOne({name: name});

        if(adminAlreadyExists){
            return res.status(409).json({
                msg: 'Admin already exists try signin instead'
            })
        }

        const hashedPassword = await bcrypt.hash(password, saltedRounds);
        console.log(hashedPassword);
        await Admin.create({name: name, password: hashedPassword})
        res.status(201).json({
            msg: 'Admin created successfully!'
        })
    }
    catch(e){
        return res.status(500).json({
            error: e.message
        })
    }
}

//sigin the admin
const adminSignInController = async(req, res) => {
    try{
        const name = req.headers.name;
        const password = req.headers.password;

        const admin = await Admin.findOne({name: name});

        if(!admin){
            return res.status(404).json({
                msg: 'Admin not found'
            })
        }

        const JWT_KEY = process.env.JWT_KEY;
        console.log(JWT_KEY);
        const comparePassoword = await bcrypt.compare(password, admin.password);

        if(comparePassoword){
            const token = jwt.sign({name: name}, JWT_KEY);
            return res.status(200).json({
                msg: 'SignIn successful',
                token: token
            })
        }
        else{
            return res.status(401).json({
                msg: 'Invalid Credentials'
            })
        }
    
    }
    catch(e){
        return res.status(500).json({
            error: e.message
        })
    }
}

module.exports = {adminSignUpController, adminSignInController};