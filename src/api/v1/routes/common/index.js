const express = require('express')

const { getHeartbeat } = require('../../common/heartbeat')

const router = express.Router()

router.route('/heartbeat').get(getHeartbeat)

module.exports = router
