// @desc    Logs request to files
const winston = require('winston')
const moment = require('moment')
const { transports, format, createLogger } = winston
const { combine, printf } = format

// Create a timeStamp
const currentTime = new Date()
const logTime = moment(currentTime).format('YYYY-MM-DD HH:mm:ss')
// Crate a custom log
const customLog = printf(({ level, message }) => {
  return `Level:[${level}] LogTime: [${logTime}] Message:-[${message}]`
})
//TODO: add postgresql-winston adapter
const date = new Date()
const newdate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
const options = {
  info: {
    level: 'info',
    dirname: 'logs/combined',
    json: true,
    handleExceptions: true,
    maxSize: '10',
    filename: `combined-${newdate}.log`,
    datePattern: 'YYYY-MM-DD-HH:MM:SS',
  },
  error: {
    level: 'error',
    dirname: 'logs/error',
    json: true,
    handleExceptions: true,
    filename: `error-${newdate}.log`,
  },
  console: {
    level: 'debug',
    json: false,
    handleExceptions: true,
    colorize: true,
  },
}

const logger = new createLogger({
  format: combine(customLog),
  transports: [
    new transports.File(options.info),
    new transports.File(options.error),
    new transports.Console(options.console),
  ],
  exitOnError: false,
})

module.exports = logger
