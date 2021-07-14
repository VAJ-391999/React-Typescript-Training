import { isAnyArrayBuffer } from "util/types";

const pathvalue = require('path');
const router = require('express').Router();
const fs = require('fs');
const adminjwt = require('jsonwebtoken')
var db = require('../ulits/db');

const adminDetails = {
    username: "admin",
    password: 12345
}

let services = {
    serviceName: "",
    servicePassword: ""
}

let serviceList: any[] = []
let refreshtokens: any[] = [];

const Collection = db.addCollection("ServiceData");

router.post('/login', (req: any, res: any) => {
    const admin = {
        username: req.body.username,
        password: req.body.password
    }

    if (admin.username === adminDetails.username && admin.password === adminDetails.password) {
        const access_token = generateToken(admin)
        const refresh_token = adminjwt.sign(admin, process.env.REFRESH_TOKEN_SECRET_KEY)
        refreshtokens.push(refresh_token);
        res.json({ accessToken: access_token, refreshToken: refresh_token })
    }
    else {
        res.json({ accessToken: "please enter correct email and passsword" })
    }
})

router.post('/token', (req: any, res: any) => {
    const refreshToken = req.body.token;
    if (refreshToken === null) return res.status(401).json({ msg: "not authrnticated" })
    if (refreshtokens.includes(refreshToken)) return res.json(process.env.REFRESH_TOKEN_SECRET_KEY)
    adminjwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY, (err: any, user: any) => {
        if (err) return res.json({ msg: "not authrnticated" })
        console.log(user)
        let admin = {
            username: user.username,
            password: user.password,
        }
        const accessToken = generateToken(admin)
        res.json({ accessToken: accessToken })
    })
})

router.get('/test', authenticateToken, (req: any, res: any) => {
    const value = Collection.insert(serviceList)
    db.saveDatabase()
    res.json({ msg: "save" })
})

router.get('/post', authenticateToken, (req: any, res: any) => {

    if (req.user.username === adminDetails.username && req.user.password === adminDetails.password) {
        fs.readFile(pathvalue.resolve(__dirname, '../db.json'), "UTF-8", (err: any, data: any) => {
            var datajson = JSON.parse(data)
            datajson.collections.map((item: any) => {
                res.json(item.data)
            })

        })
    }
    else {
        res.json({ msg: "you are not authenticated" })
    }
})

router.post('/service', authenticateToken, (req: any, res: any) => {
    let services = {
        serviceName: req.body.servicename,
        servicePassword: req.body.servicepassword
    }

    serviceList.push(services)
    res.json(serviceList);
})

router.post('/servicename', authenticateToken, (req: any, res: any) => {
    let servicename = req.body.servicename;
    //console.log(servicename)
    //res.json({service: servicename})

    if (req.user.username === adminDetails.username && req.user.password === adminDetails.password) {
        fs.readFile(pathvalue.resolve(__dirname, '../db.json'), "UTF-8", (err: any, data: any) => {
            var datajson = JSON.parse(data)
            console.log(datajson)
            datajson.collections.map((item: any) => {
                item.data.map((ser: any, i: any) => {
                    console.log(ser)
                    if (ser.serviceName === servicename) {
                        res.json(ser)
                    }
                    else {
                        res.status(400).json(item.data)
                    }
                })
                res.json(item)

            })
            //res.json({msg: "a"})
        })
    }
    else {
        res.json({ msg: "you are not authenticated" })
    }

})

router.delete('/delete', authenticateToken, (req: any, res: any) => {
    let servicename = req.body.servicename;


    if (req.user.username === adminDetails.username && req.user.password === adminDetails.password) {
        fs.readFile(pathvalue.resolve(__dirname, '../db.json'), "UTF-8", (err: any, data: any) => {
            var datajson = JSON.parse(data)
            //console.log(datajson)
            var tempdata: any[] = [];
            datajson.collections.map((item: any, index: any) => {
                tempdata = item.data
            })
            console.log("tempdata", tempdata)
            if (tempdata.length === 0) {
                return res.json({ message: "No services available." });
            } else {
                tempdata.forEach((element: any) => {
                    if (element.serviceName == servicename) {
                        console.log(element.serviceName)
                        tempdata.splice(element.serviceName, 1);
                        db.saveDatabase();
                        return res.json({ message: "Deleted" });
                    }
                    else {
                        return res.json({ message: "No such service found !" });
                    }
                });
            }
        })
    }
    else {
        res.json({ msg: "you are not authenticated" })
    }
})

router.patch('/update', authenticateToken, (req: any, res: any) => {
    let servicename = req.body.servicename;
    //console.log(servicename)
    //res.json({service: servicename})

    if (req.user.username === adminDetails.username && req.user.password === adminDetails.password) {
        fs.readFile(pathvalue.resolve(__dirname, '../db.json'), "UTF-8", (err: any, data: any) => {
            var datajson = JSON.parse(data)
            console.log(datajson)
            datajson.collections.map((item: any) => {
                item.data.map((ser: any, i: any) => {
                    console.log(ser)
                    if (ser.serviceName === servicename) {
                        ser["servicePassword"] = req.body.servicepassword;
                    }
                    else {
                        res.status(400).json(item.data)
                    }
                })
                res.json(item)

            })
            //res.json({msg: "a"})
        })
    }
    else {
        res.json({ msg: "you are not authenticated" })
    }
})

function generateToken(admin: any) {
    return adminjwt.sign(admin, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '5m' })
}



function authenticateToken(req: any, res: any, next: any): any {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(403)

    adminjwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err: any, user: any) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router;