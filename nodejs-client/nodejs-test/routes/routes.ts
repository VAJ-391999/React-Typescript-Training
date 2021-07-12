//const requests = require('requests');
const urouter = require('express').Router();
const ujwt = require('jsonwebtoken');
const urequests = require('requests');
const ubcrypt = require('bcryptjs')
const SignUpTemplateCopy = require('../models/SignUpModels');
const fun =  require('../middleware/authMiddleware');


urouter.post('/signup', async (request: any, response: any) => {

    try {
        const signUpedUser = new SignUpTemplateCopy({
            fullName: request.body.fullName,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
        })

        const token = await signUpedUser.generateAuthToken();
        console.log("success token", token)

        const signup = await signUpedUser.save()
        response.json({ msg: "You have Sign Up Successfully", signup })
        /*response.status(200)
                   .cookie("signup", "signupujwt", {
                        sameSite : "strict",
                        path: "/",
                        httpOnly : true 
                   }).send({ msg: "Signup Success", signup })*/

    }
    catch (err) {
        response.json({ msg: err.message })
    }
})

urouter.get('/login', (request: any, response: any) => {

    const uemail = request.body.email
    const upassword = request.body.password

    console.log(uemail, upassword)


    SignUpTemplateCopy.find({})
        .then((data: any) => {
            console.log("Data :", data)
            response.json(data)
        })
        .catch((err: any) => {
            console.log("error: ", err)
        })

})

urouter.post('/login', async (request: any, response: any) => {

    try {
        const registeruser = {
            email: request.body.email,
            password: request.body.password
        }

        console.log(`before login time get cookie ${request.headers.cookie.login}`)

        const useremail = await SignUpTemplateCopy.findOne({ email: registeruser.email })

        if (useremail) {
            const isMatch = await ubcrypt.compare(registeruser.password, useremail.password)

            if (isMatch) {

                const token = ujwt.sign({_id:useremail._id, "iat": 1234567890}, process.env.SECRET_KEY)
                console.log("login token generater",token)

                response.status(200)
                   .cookie("login", token, {
                        httpOnly : true 
                   }).send({ msg: "Login Success", useremail, auth: true })

            }
            else {
                response.json({ msg: "Please Enter Correct Password", auth: false  })
            }
        }
        else {
            response.json({ msg: "Please Enter Correct Email", auth: false  })
        }
    }
    catch (err) {
        response.json({ msg: "Please Enter Valid Login Details" , auth: false })
    }
})


urouter.get('/dashboard', fun.checkUser, (request: any, response: any) => {
    console.log(`Dashboard time get cookie ${request.headers.cookie}`)
    let loginToken = "";
    
    const cookieData = request.headers.cookie.split(';');
    cookieData.map((item: any,index: any) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })
    console.log("login Token" , loginToken)
    console.log("middleware", request.currentuser)
    if(request.headers.cookie) {
        response.json({msg: "dashboard"})
    }
    else {
        response.json({msg: "cookie not set"})
    }
})

urouter.get('/logout', async (request: any, response: any) => {
    try{
        response.status(200)
        .cookie("login","logut", {maxAge: 1, httpOnly : true })
        .json({msg:"logout"})
    }catch(err) {
        response.status(400).json({msg:"Somthing Wrong"})
    }

})

urouter.post('/', (request: any, response: any) => {
    
    console.log(request.body.cName);
    urequests(`http://api.openweathermap.org/data/2.5/weather?q=${request.body.cName}&appid=5ae591762ca1938ecc9cddeafe00f8d4`)
        .on('data', function (chunk: any) {
            response.setHeader("Access-Control-Allow-Origin", "*")
            response.write(chunk)
            response.end(`Post Mothos Success Congo... ${request.body}`)
        })

})

module.exports = urouter;