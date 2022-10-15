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
    // Profile_photo: {
    //     type:URL
    // },
    //     type:Number,
    // Phone_Number: {
    //     type:Number,
    //     required: 'Phone Number is required',
    //     unique: true
    // },
    // CV: {
    //     type:URL,
    //     required: 'CV is required',
    // },
    // User_Type: {
    //     type: String,
    //     required: 'User type is required'
    // },
    // Major: {
    //     type: String,
    //     required: 'Major is required'
    // },
    // Country:{
    //     type: String,
    //     required: 'Country is required'
    // },
    // City:{
    //     type: String,
    //     required: 'City is required'
    // }
})

const User = mongoose.model('User', userSchema);

module.exports = User;