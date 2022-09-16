'use strict'

const createServer = async () => {
    const express = require('express')
    const app = express()

    // Body parser, need these for POST and PUT request
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    const PORT = process.env.PORT || 3000

    const server = app.listen(
        PORT,
        console.log(
            `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
        )
    )
}

module.exports = createServer
