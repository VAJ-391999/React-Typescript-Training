var file = require('fs');
var crouter = require('express').Router();
var pathvalue = require('path')
const axios = require('axios').default;
var cityrequests = require('requests');
const cdb = require('../utils/db');
const uid = require('uuid');
const adminjwt = require('jsonwebtoken');

const weatherCityList: any[] = [];
const testList: any[] = [];
const minTemp: any = 10;
const maxTemp: any = 30;


const Collection = cdb.addCollection("weatherData");


crouter.get('/city', (req: any, res: any) => {
    file.readFile(pathvalue.resolve(__dirname, 'cities_20000.json'), "UTF-8", (err: any, data: any) => {
        var datajson = JSON.parse(data)
        console.log(data)
        res.json(datajson)
    })
})

crouter.get('/citydefault', (req: any, res: any) => {
    cityrequests(`https://api.weatherbit.io/v2.0/current/?key=05a15153fe924e8fad885b8b4452dd64&lang=en&city=pune`)
        .on('data', function (chunk: any) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.write(chunk)
            res.end()
        })
})

crouter.post('/city', (req: any, res: any) => {
    console.log(req.body.cName)
    const cname = req.body.cName;

    axios.get('https://api.weatherbit.io/v2.0/current/?key=05a15153fe924e8fad885b8b4452dd64&lang=en&city=' + cname)
        .then((response: any) => {
            response.data.data.map((item: any, index: any) => {
                if (item.temp >= minTemp && item.temp <= maxTemp) {
                    let tempid = uid.v4();
                    item["id"] = tempid;
                    weatherCityList.push(item);
                    res.json(item)
                }
                else {
                    res.json({ msg: "Temp is not in range" })
                }

            })
        })
        .catch((error: any) => {
            console.log(error);
        });
    /*cityrequests(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.cName}&appid=5ae591762ca1938ecc9cddeafe00f8d4`)
    .on('data', function (chunk: any) {
        res.setHeader("Access-Control-Allow-Origin", "*")
        console.log(chunk)
        res.write(chunk)
        res.end()
    })*/
})

crouter.get('/city/savecity', (req: any, res: any) => {
    const value = Collection.insert(weatherCityList);
    cdb.saveDatabase();

    file.readFile(pathvalue.resolve(__dirname, '../db.json'), "UTF-8", (err: any, data: any) => {
        var datajson = JSON.parse(data)

        datajson.collections.map((item: any) => {
            res.json(item.data)
        })

    })
})


module.exports = crouter;