const mongooses = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const SignUpTemplate = new mongooses.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: [2, "Minimum lenght : 2, Maximun lenght : 30"],
        maxlength: 30
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        validate(value: any) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value: any) {
            if (value < 0) {
                throw new Error('Password can not be 0')
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    tokens:[{
        token: {
            type: String,
            required: true, 
        }
    }]
})

//generateAuthToken

SignUpTemplate.methods.generateAuthToken = async function() {
    try {
        console.log("id:",this._id)
        const token = jwt.sign({_id:this._id, "iat": 1234567890}, process.env.SECRET_KEY)
        console.log("Signup token genetater",token)
        this.tokens = this.tokens.concat({token})
        await this.save();
        return token
    }
    catch(err) {
        response.json(err)
    }

    
}

SignUpTemplate.methods.generateAuthTokenLogin = async function() {
    try {
        const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        console.log("logintoken generater",token)
        //this.tokens = this.tokens.concat({token:token})
        //await this.save();
        return token
    }
    catch(err) {
        response.json(err)
    }
}

SignUpTemplate.pre('save', async function(this:any,next: any){
    if(this.isModified("password")) {
        //console.log(`current password ${this.password}`)
        this.password = await bcrypt.hash(this.password, 10);
        //console.log(`current password ${this.password}`)
    }
    
    next(); 
})

module.exports = mongooses.model('myFirstDatabase', SignUpTemplate);

