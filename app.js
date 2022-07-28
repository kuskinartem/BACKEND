require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const apiRoutes = require("./src/model/routes/routes");
const {
    URL,
    PORT
} = require('./config');

const connect = () => {
    try {
        mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        }); 
    } catch {
        console.error('Connection not created');
        process.exit(1)
    }
};

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

connect()