const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    profile_photo: {
        type:String
    },
    phone_number: {
        type:String,
        required: 'Phone Number is required',
        unique: true
    },
    cv: {
        type:String
    },
    user_type: {
        type: String,
        required: 'User type is required'
    },
    major: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    number_of_employees:{
        type: String
    },
    bio: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;