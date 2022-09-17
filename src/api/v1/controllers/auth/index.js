const User = require('../../models/User')
const asyncHandler = require('../../middleware/async')

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body
    console.log({ name, email, password })
    // Create user
    const user = await User.create({
        name,
        email,
        password,
    })
        .then(function (user) {
            res.json({
                Message: 'User created',
                User: user,
            })
        })
        .catch(function (err) {
            console.log(err)
        })

    // console.log(user)

    // TODO: send token response
})
