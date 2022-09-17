const User = require('../../models/User')
const asyncHandler = require('../../middleware/async')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    })
    .catch(function (err) {
      Logger.log('Error:', `${JSON.stringify(err)}`)
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
        return res.status(404).send({ message: 'User Not found.' })
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        })
      } else {
        const token = jwt.sign({ id: user.id }, secret, {
          expiresIn: 86400, // 24 hours
        })

        res.status(200).send({
          id: user.id,
          username: user.name,
          email: user.email,
          accessToken: token,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
