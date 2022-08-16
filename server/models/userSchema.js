const mongoose = require("mongoose")

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

const users= new mongoose.model("users", userSchema);
module.exports =users;