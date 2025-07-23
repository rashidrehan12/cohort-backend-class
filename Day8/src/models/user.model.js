const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:String,
    password:String,
})

const userMOdel = mongoose.model('User', userSchema);

module.exports = userMOdel