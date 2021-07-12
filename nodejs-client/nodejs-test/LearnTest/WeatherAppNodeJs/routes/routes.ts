const prouter = require('express').Router();
const prequests = require('requests');

prouter.get('/getdata', (req: any, res: any) => {
    prequests('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=5ae591762ca1938ecc9cddeafe00f8d4')
        .on('data', function (chunk: any) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.write(chunk)
            res.end()
        })
})

prouter.post('/postdata', (request: any, response: any) => {
    console.log(`login time get cookie ${request.cookies.login}`)
    console.log(request.body.cName)
    prequests(`http://api.openweathermap.org/data/2.5/weather?q=${request.body.cName}&appid=5ae591762ca1938ecc9cddeafe00f8d4`)
    .on('data', function (chunk: any) {
        response.setHeader("Access-Control-Allow-Origin", "*")
        console.log(chunk)
        response.write(chunk)
        response.end()
    })
})


module.exports = prouter;