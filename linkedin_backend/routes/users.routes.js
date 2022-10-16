const { Router } = require('express')
const { updateProfile, addJob } = require('../controllers/company.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const companyMiddleware = require('../middlewares/company.middleware')

const router = Router()

router.put('/updateProfile', authMiddleware, companyMiddleware, updateProfile)
router.post('/addJob', companyMiddleware, addJob)

module.exports = router
