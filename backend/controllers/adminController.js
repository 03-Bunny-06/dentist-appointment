const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");

//creation of admin
const adminSignUpController = async(req, res) => {
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

module.exports = adminSignUpController;