const Job = require('../models/Job.model')
const User = require('../models/User.model')

const updateProfile = async (req, res) => {
  params = req.body
  const user = await User.updateOne(
    { email: params.email },
    {
      name: params.name,
      phone_number: params.phone_number,
      profile_photo: params.profile_photo,
      bio: params.bio,
      country: params.country,
      city: params.city,
      number_of_employees: params.number_of_employees,
    },
  )
  res.json(user)
}
const addJob = async (req, res) => {
  params = req.body
  console.log('params :>> ', params)
  const job = new Job({
    job_title: params.job_title,
    job_description: params.job_description,
    major: params.major,
    company_id: params.company_id,
  })
  await job.save()
  res.json({ job })
}
module.exports = {
  updateProfile,
  addJob,
}
