const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).select('+password')

  if (!user) return res.status(404).json({ message: 'Invalid Credentials' })

  const isMatch = bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(404).json({ message: 'Invalid Credentials' })

  const token = jwt.sign(
    { email: user.email, name: user.name, userType: User.user_type },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '1h',
    },
  )
  res.status(200).json(token)
}
const signup = async (req, res) => {
  const { name, email, password, user_type, phone_number } = req.body
  try {
    const user = new User()
    user.name = name
    user.email = email
    user.password = await bcrypt.hash(password, 10)
    user.user_type = user_type
    user.phone_number = phone_number

    await user.save()
    res.json(user)
  } catch (err) {
    res.status(400).json({
      message: err.message,
    })
  }
}
module.exports = {
  login,
  signup,
}
