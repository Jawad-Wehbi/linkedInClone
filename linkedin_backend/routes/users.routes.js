const { Router } = require('express')
const { updateProfile } = require('../controllers/company.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router()

router.put('/updateProfile', authMiddleware, updateProfile)

module.exports = router
