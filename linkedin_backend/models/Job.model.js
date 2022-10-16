const mongoose = require('mongoose')
const { schema } = require('./User.model')

const jobSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: 'Job title is required',
    unique: true,
  },
  job_description: {
    type: String,
    required: 'email is required',
  },
  major: {
    type: String,
    required: 'password is required',
  },
  company_Id: {
    type: String,
  },
  applicants: [
    {
      type: Array,
    },
  ],
})

const Job = mongoose.model('Jobs', jobSchema)

module.exports = Job
