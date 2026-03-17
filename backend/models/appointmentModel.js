const mongoose = require("mongoose");

const typesOfGenders = ["Male", "Female", "Non-binary", "Prefer not to say"];
const AppointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: typesOfGenders,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    dentistName: {
        type: String,
        required: true
    },
    clinicName: {
        type: String,
        required: true
    }
})

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;