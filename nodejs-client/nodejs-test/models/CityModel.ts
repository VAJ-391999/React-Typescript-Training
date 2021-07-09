var file = require('fs');
var crouter = require('express').Router();
var pathvalue = require('path')


crouter.get('/city', (req: any, res: any) => {
    file.readFile(pathvalue.resolve(__dirname,'cities_20000.json'), "UTF-8", (err: any, data: any) => {
        var datajson = JSON.parse(data)
        console.log(data)
        res.json(datajson)
    })
})

module.exports = crouter;