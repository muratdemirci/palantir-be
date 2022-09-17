const express = require('express')
// anaylsis endpoint should be protected

//TODO: analytics
const express = require('express')
const { insert, list } = require('../../controllers/analytics')

const router = express.Router()

router.post('/insert', insert)
router.get('/list', list)
