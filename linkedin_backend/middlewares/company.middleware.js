const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

const companyMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) return res.status(401).json({ message: '1 Unauthorized' })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const user = await User.findOne({ email: decoded.email }).lean()
    if (user && decoded.user_type === 'Company') next()
  } catch (err) {
    console.log('err :>> ', err)
    res.status(401).json({ message: '2 Unauthorized' })
  }
}

module.exports = companyMiddleware
