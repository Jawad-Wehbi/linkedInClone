const mongoose = require('mongoose');
const { schema } = require('./User.model');


const jobSchema = new mongoose.Schema({
    Job_title: {
        type: String,
        required: 'Job title is required',
        unique: true,
    },
    Job_description: {
        type: String,
        required: 'email is required'
    },
    Major: {
        type: String,
        required: 'password is required'
    },
    Company_Id: {
        type: Number,
    },
    Applicants: [
  {
    type:mongoose.Schema.Types.ObjectId, ref:'User.model'
  }
    ]
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;