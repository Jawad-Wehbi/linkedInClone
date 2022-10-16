const Job = require('../models/Job.model')
const User = require('../models/User.model')

const getAllJobs = async (req, res) => {
  const job = req.job
  res.json({ job: Job })
}

const updateProfile = async (req, res) => {
  params = req.body;
  const user = await User.updateOne(
    { email: params.email },
    { name: params.name, 
      phone_number: params.phone_number, 
      profile_photo: params.profile_photo, 
      bio:params.bio, 
      country:params.country, 
      city:params.city,
      number_of_employees:params.number_of_employees },
  )
  res.json(user)
}


module.exports = {
  getAllJobs,
  updateProfile
}
