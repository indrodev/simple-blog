# A Simple Blog

## Prerequisite

- `nodejs`, `mongodb` and `nvm` installed in the system

or
- `.devcontainer` feature in vscode. For more info - https://code.visualstudio.com/docs/remote/containers
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
# Server Running at Port 3000

```

## API Documentation

After running the service visit `http://looalhost:{PORT}/docs`

or 

You can find postman collection `public/postman-collection`
