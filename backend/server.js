const env = require("dotenv");
env.config({path: "../.env"});
const express = require("express");
const app = express();

PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
})