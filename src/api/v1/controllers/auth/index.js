const User = require('../../models/User')
const asyncHandler = require('../../middleware/async')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Logger = require('../../middleware/logger')
const ErrorResponse = require('../../middleware/errorResponse')

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body
  // Create user
  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 8),
  })
    .then(function (user) {
      res.json({
        Message: 'User registered successfully!',
        User: user,
      })
      Logger.log('info', 'User registered successfully!')
    })
    .catch(function (err) {
      Logger.log('error', `${JSON.stringify(err)}`)
      return next(new ErrorResponse('User could not registered!', 400))
    })
})

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = (req, res) => {
  const { email } = req.body
  const secret = process.env.SECRET_KEY || 'mordoridmanyurdu'

  User.findOne({
    where: {
      email,
    },
  })
    .then((user) => {
      if (!user) {
        Logger.log('error', `'User Not found.'${JSON.stringify(user)}`)
        return next(new ErrorResponse('User Not found.', 404))
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        Logger.log('error', 'Invalid Password!')
        return next(new ErrorResponse('Invalid Password!', 401))
      } else {
        const token = jwt.sign({ id: user.id }, secret, {
          expiresIn: 86400, // save it for 24 hours
        })

        res.status(200).send({
          id: user.id,
          username: user.name,
          email: user.email,
          accessToken: token,
        })

        Logger.log('info', 'User successfully logged in')
      }
    })
    .catch((err) => {
      Logger.log('error', JSON.stringify(err.message))
      return next(new ErrorResponse(JSON.stringify(err.message), 500))
    })
}
