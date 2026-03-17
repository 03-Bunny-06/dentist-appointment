const Dentist = require("../models/dentistModel");

const createDentistController = async(req, res) => {
    try{
        const photoUrl = req.body.photoUrl;
        const name = req.body.name;
        const qualification = req.body.qualification;
        const yearsOfExperience = req.body.yearsOfExperience;
        const clinicName = req.body.clinicName;
        const address = req.body.address;
        const location = req.body.location;

        const data = {
            photoUrl,
            name,
            qualification,
            yearsOfExperience,
            clinicName,
            address,
            location
        }

        const dentistAlreadyExists = await Dentist.findOne({name: name});

        if(dentistAlreadyExists){
            return res.status(409).json({
                msg: "Dentist already exists with this specfic name"
            })
        }
        await Dentist.create(data);
        res.status(201).json({
            msg: "Dentist created successfully"
        })
    }
    catch(e){
        res.status(500).json({
            error: e.message
        })
    }
}

const getAllDentistsController = async(req, res) => {
    try{
        const dentistsData = await Dentist.find({});
        //const countOfDentists = await Dentist.countDocuments({});
        res.status(200).json({
            totalDentists: dentistsData.length,
            msg: dentistsData
        })
    }
    catch(e){
        res.status(500).json({
            error: e.message
        })
    }
}

module.exports = {
    createDentistController, getAllDentistsController
}