require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const apiRoutes = require('./src/model/routes/routes.js');
const {
  URL,
  PORT
} = require('./config');

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

const connect = () => {
  try {
    mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    }); 
  
  } catch(error) {
      console.error('Connection not created');
      process.exit(1)
  }
};

connect()