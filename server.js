'use strict'

const initServer = require('./src/api/init')

require('dotenv').config()

const start = async () => {
    try {
        await initServer()
    } catch (error) {
        console.log(error)
    }
}

start()
