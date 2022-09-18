# Palantir REST API service

A REST API for communicate [web ui](https://github.com/muratdemirci/palantir-fe), [data crawler](https://github.com/muratdemirci/palantir-crawler) and [nlp service](https://github.com/muratdemirci/palantir-nlp).
Uses collections of basic practices: Auth, Security, RESTful resources, API docs, Input validation, Error handling and Logging.

> Uses PostgreSQL as its database and makes authentication with (jwt).

## Libraries and tools used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Cors](https://www.npmjs.com/package/cors)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Moment.js](https://github.com/expressjs/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Node-postgres](npmjs.com/package/pg)
- [Pg-hstore](https://www.npmjs.com/package/pg-hstore)
- [Yup](https://www.npmjs.com/package/yup)
- [Winston](https://github.com/winstonjs/winston)
- [Docker](https://www.docker.com/)

### Getting Started

Clone this repository and install dependencies

```
> git clone https://github.com/muratdemirci/palantir-be.git
> cd palantir-be

> npm install
```

#### Run development with nodemon

```
> npm run dev
```

#### Build and run for production

```
> npm run start
```

### Docker compose support

```
> cd palantir-be

# Run your docker compose
> docker-compose up
```

### API documentation

Checkout `localhost:8080/docs`.

When using [Apiary](https://apiary.io/), create new project api using swagger and
copy `swagger.json` content to the editor and publish it. See [example](http://docs.expressrestapi.apiary.io).

## Licence

MIT
