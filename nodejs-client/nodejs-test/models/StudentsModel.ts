const smongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };

const studentSchema = new smongoose.Schema({
   name: {
        type : String,
        required : true,
        minlength: 3
    },
    email: {
        type: String,
        required : true,
        unique : [true, "Email is already present"],
        validate(value: any) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type : Number,
        required: true,
        minlength: 10,
        
    },
    address : {
        type: String,
        required : true
    }
    
}, opts);


//Add new collection to mongoodb database
const Students = new smongoose.model("Student", studentSchema);

module.exports = Students;