const env = require("dotenv");
env.config({path: '../.env'});
const mongoose = require("mongoose");

const connectDb = async(req, res) => {
    try{
        const dbUrl = process.env.DATABASE_URL;
        await mongoose.connect(dbUrl);
        console.log("Database connection successful ✅");
    }
    catch(e){
        console.log(`MongoDB Error❌: ${e.message} `);
    }
}

module.exports = connectDb;