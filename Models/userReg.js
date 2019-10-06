const mongoose = require('mongoose');

var regUser = new mongoose.Schema({
    userHandle   : String,
    dob          : String,
    member       : {type : String, default : 'NO'},
    registeredOn : {type : Date, default : Date.now}
});

module.exports = mongoose.model("userDetails", regUser)
