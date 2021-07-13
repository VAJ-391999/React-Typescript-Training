const express = require('express');
const jwt = require('jsonwebtoken');
//const dotenv = require("dotenv").config();
const routeUrl = require('./routes/route');

const dotenv = require('dotenv')

const PORT = process.env.PORT || 8002;

dotenv.config()

const app = express();

app.use(express.json());
app.use(function(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
app.use('/app',routeUrl);

app.listen(PORT, () => {console.log(`Server is running on port no ${PORT}...`)});







