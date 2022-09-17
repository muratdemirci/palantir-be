const { Sequelize } = require('sequelize')

const connectionCredentials = {
    database: process.env.DB_NAME || 'palantir',
    username: process.env.DB_USER || 'mordoridmanyurdu',
    password: process.env.DB_PASSWORD || '123456',
    host: process.env.DB_HOST || 'localhost',
    port: '5433',
}

const db = new Sequelize(
    connectionCredentials.database,
    connectionCredentials.username,
    connectionCredentials.password,
    {
        host: connectionCredentials.host,
        port: connectionCredentials.port,
        dialect: 'postgres',
        define: {
            timestamps: false,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
)

module.exports = db
