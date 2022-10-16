const Job = require('../models/Job.model')
const User = require('../models/User.model')



const getAllJobs = async (req, res) => {
    const job = req.job
    res.json({ job: Job })
  }



module.exports = {
  getAllJobs
}