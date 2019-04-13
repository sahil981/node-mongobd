const mongoose = require('mongoose');

var User = mongoose.model('user',{
    email:{
        type: String,
        trime: true,
        minlength: 1,
        required: true
    }
});

module.exports = {User};