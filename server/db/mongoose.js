const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
console.log(process.env);
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};