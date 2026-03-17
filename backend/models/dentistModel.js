const mongoose = require("mongoose");
const DentistSchema = new mongoose.Schema({
    photoUrl: {
        type: String,
        default: "https://i.pinimg.com/236x/dd/f0/11/ddf0110aa19f445687b737679eec9cb2.jpg"
    },
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        default: 0
    },
    clinicName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const Dentist = mongoose.model('Dentist', DentistSchema);

module.exports = Dentist;