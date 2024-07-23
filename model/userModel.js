const mongoose = require("mongoose");
var md5 = require('md5');
const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        set:value => md5(value),
        select:false
    },
    email:{
        type: String,
        require: true
    },
    image: {
        type: String,
        default:null
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    updateAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = userSchema