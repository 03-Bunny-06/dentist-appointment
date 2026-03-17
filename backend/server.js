const env = require("dotenv");
env.config({path: "../.env"});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dentistRouter = require("./routes/dentistRoutes");

const connectDb = require("./config/db");
connectDb();

app.use(bodyParser.json());
app.use('/dentists', dentistRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started at: ${PORT} 🚀`);
})