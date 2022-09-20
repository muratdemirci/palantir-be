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

## User register

### Request

`POST http://localhost:8090/api/v1/auth/register`

    curl -i -H 'Accept: application/json' -d 'name=Murat&email=murat@email.com&password=123456' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Sun, 18 Sep 2022 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {"Message": "User registered successfully!",
    "User": {
        "id": 20,
        "name": "murat",
        "email": "murat@email.com",
        "password": "$2a$08$CXOpWkxshXJAAxePnAi.7Ofk.M5TkqBT4KUCj84k7kAzjGspgdCt2"
    }}

## User login

### Request

`POST http://localhost:8090/api/v1/auth/login`

    curl -i -H 'Accept: application/json' -d 'email=murat@email.com&password=123456' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Sun, 18 Sep 2022 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {"id": 18, "username": "murat", "email": "murat@email.com" "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTY2MzQ4NDc1MiwiZXhwIjoxNjYzNTcxMTUyfQ.4amnyq5wGJTxCwtd22S0uioBg7vByH2pia2xMlWXl-c"}

### About this project

Palantir is a micro-saas project which is analyses tweets of crypto influencers to predict the direction of the market.  
This project was made for [Teknasyon Hackathon '22 - Yüzük Kardeşliği](https://teknasyon.com/tech/hackathon22/#/).  
We took 2nd place among 13 teams.  
![mordor idman yurdu :)](hackathonwin.jpeg 'mordor idman yurdu :)')

## Licence

MIT
