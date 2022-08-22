const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    mobilenumber: {
        type: Number,
        require: true,
        unique: true
    },
    age: {
        type:Number,
        require: true,
    },
    adress: {
        type: String,
        require: true,
    },
    pass:{
        type: String,
        require: true
    }

})


// hashing  password 

userSchema.pre('save', async function(next){
    console.log('flkdsjfl')
    if(this.isModified('pass')){

        this.pass = await bcrypt.hash(this.pass,12);
        console.log("hello ")
    }
    next();
})









const users= new mongoose.model("users", userSchema);
module.exports =users;