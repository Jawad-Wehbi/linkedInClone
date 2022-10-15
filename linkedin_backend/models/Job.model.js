const mongoose = require('mongoose');


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
          street: '123',
          city: Faketon,
          state: MA,
          zip: 12345
        },
        {
          "street": "1 Some Other Street",
          "city": "Boston",
          "state": "MA",
          "zip": "12345"
        }
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;