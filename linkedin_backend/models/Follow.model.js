const mongoose = require('mongoose');



const followSchema = new mongoose.Schema({
    User_Id: {
        type: Number
    },
    Company_Id: {
        type: Number
    },

})

const Follow = mongoose.model('Follow', followSchema);

module.exports = Follow;