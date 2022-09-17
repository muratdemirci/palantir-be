const express = require('express')
const { register, login } = require('../../controllers/auth')
const validation = require('../../middleware/validate')
const { usrRegisterSchema, usrLoginSchema } = require('../../validations/user')

const router = express.Router()

router.post('/register', validation(usrRegisterSchema), register)

router.post('/login', validation(usrLoginSchema), login)

module.exports = router
