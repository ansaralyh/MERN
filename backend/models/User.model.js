const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String, 
        required: true
    },
   
    Age: {
        type: Number,
        required: true
    },
    Hobbies: {
        type: String,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
