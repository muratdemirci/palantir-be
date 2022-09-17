const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY || 'mordoridmanyurdu'
const Logger = require('../middleware/logger')
const ErrorResponse = require('../middleware/errorResponse')

verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token']

  if (!token) {
    Logger.log('error', 'No token provided')
    return next(new ErrorResponse('No token provided!', 403))
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      Logger.log('error', 'Unauthorized!')
      return next(new ErrorResponse('No token provided!', 401))
    }
    req.userId = decoded.id
    next()
  })
}
