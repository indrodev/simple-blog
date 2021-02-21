# A Simple Blog

## Prerequisite

- `nodejs`, `mongodb` and `nvm` installed in the system

## Installation

Navigate in the project

```bash
$ cd simple-blog
```

Copy `env.sample` to `.env`

```bash
$ cp env.sample .env
```

Install `node_modules`

```bash
$ npm i
```

## `.env` file

```
# Note this is an example do change the values before deploying in production
NODE_ENV="development"
PORT=3000
SITE_URL="http://localhost:3000"
APP_NAME="Webskitters Assignment"
APP_SECRET="This is a super secret key"
MONGODB_CONNECTION_STRING="mongodb://localhost:27017/webskitters-blog"

```

## Running the service

```bash
$ npm start

# output
# [nodemon] 2.0.7
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching path(s): *.*
# [nodemon] watching extensions: js,mjs,json
# [nodemon] starting `node server.js`
# Server Running at Port 3000

```

## API Documentation

After running the service visit `http://looalhost:{PORT}/docs`


