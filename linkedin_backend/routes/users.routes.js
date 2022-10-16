const { Router } = require('express')
const { updateProfile, addJob } = require('../controllers/company.controller')
// const userMiddleware = require('../middlewares/user.middleware')
const companyMiddleware = require('../middlewares/company.middleware')

const router = Router()

router.put('/updateProfile', companyMiddleware, updateProfile)
// router.put('/updateProfile', userMiddleware, updateProfile)
router.post('/addJob', companyMiddleware, addJob)

module.exports = router
