const asyncHandler = require('../middleware/async')

// @desc      Gets api heartbeat
// @route     POST /api/v1/common/heartbeat
// @access    Public
exports.getHeartbeat = asyncHandler(async (req, res, next) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
    }

    res.status(200).send(data)
})
