const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const session= require('express-session');
//get the status of environment variable
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const routeStudentUrls = require('./routes/studentRoute');
const routeCity = require('./models/CityModel');
const data = require('./LearnTest/UserApi/useapi.json')
const cors = require('cors')

const PORT = process.env.PORT || 4002;

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
 }, () => console.log("Database Connected"))

//use is for middleware registration

app.use(session({secret: "hsndbndhjfhfu", resave : false, saveUninitialized : true}))
app.use('/userapi', (req: any,res: any) => {
    
    fs.readFile(`${__dirname}/LearnTest/UserApi/useapi.json`, "UTF-8", (err: any, data: any) => {
        res.send(data)
        res.end("<h1>Hello UserAPI</h1>")
    }) 
   
})
app.use(function(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
app.use(express.json())
app.use(cookieParser());
app.use(cors({ credentials : true, origin: "http://localhost:3000"}))
app.use('/app', routeUrls)
app.use('/restfulapi', routeStudentUrls)
app.use('/weather', routeCity)
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}....`))