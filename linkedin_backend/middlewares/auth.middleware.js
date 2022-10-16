const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) return res.status(401).json({ message: '1 Unauthorized' })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log('decoded :>> ', decoded)
    const user = await User.findOne({ email: decoded.email }).lean()
    console.log('user :>> ', user);
    next();
  } catch (err) {
    console.log('err :>> ', err);
    res.status(401).json({ message: '2 Unauthorized' })
  }
}

module.exports = authMiddleware
