
const User = require('../models/SignUpModels');

exports.requireAuth = function(request: any, res: any, next: any) {
    let loginToken = "";
    console.log(request.headers.cookie)
    const cookieData = request.headers.cookie.split(';');

    cookieData.map((item: any, index: any) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })

    if (loginToken !== "") {
        jwt.verify(loginToken, process.env.SECRET_KEY, (err: any, decodeedToken: any) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(decodeedToken)
                next()
            }
        })
    }
    else {
        res.send()
        next()
    }
}

exports.checkUser = function(req: any, res: any, next: any) {
    let loginToken = "";
    console.log(req.headers.cookie)
    const cookieData = req.headers.cookie.split(';');

    cookieData.map((item: any, index: any) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })

    if (loginToken !== "") {
        jwt.verify(loginToken, process.env.SECRET_KEY, async (err: any, decodeedToken: any) => {
            if (err) {
                console.log(err.message)
               
            } else {
                console.log(decodeedToken)
                let user = await User.findById(decodeedToken._id);
                req.currentuser = user
                console.log(user)
                next()
            }
        })
    }
    else {
        
        next()
    }
}

//module.exports.requireAuth = requireAuth;
//module.exports.checkUser = checkUser;