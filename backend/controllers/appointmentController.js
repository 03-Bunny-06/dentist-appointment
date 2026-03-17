const Dentist = require("../models/dentistModel");
const Appointment = require("../models/appointmentModel");

const createAppointmentController = async(req, res) => {
    try{
        const patientName = req.body.patientName;
        const age = req.body.age;
        const gender = req.body.gender;
        const appointmentDate = req.body.appointmentDate;
        const dentistName = req.body.dentistName;
        const clinicName = req.body.clinicName;

        const data = {
            patientName,
            age,
            gender,
            appointmentDate,
            dentistName,
            clinicName
        }

        const isValidDentist = await Dentist.findOne({name: dentistName, clinicName: clinicName});

        const appointmentExists = await Appointment.findOne({patientName: patientName, dentistName: dentistName, clinicName: clinicName});

        if(!isValidDentist){
            return res.status(404).json({
                msg: "The dentist is not a valid dentist or a valid clinic"
            })
        }
        if(appointmentExists){
            return res.status(409).json({
                msg: "Your appointment already exists with this dentist in this clinic"
            })
        }
        await Appointment.create(data);
        res.status(201).json({
            msg: "Appointement created successfully"
        })
    }
    catch(e){
        res.status(500).json({
            error: e.message
        })
    }
}

const getAllAppointmentsController = async(req, res) => {
    try{
        const appointmentsData = await Appointment.find({});
        res.status(200).json({
            totalAppointments: appointmentsData.length,
            msg: appointmentsData
        })
    }
    catch(e){
        res.status(500).json({
            error: e.message
        })
    }
}

module.exports = {
    createAppointmentController, getAllAppointmentsController
}