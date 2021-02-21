// importing packages
require("dotenv").config()
const express = require("express")
const path = require("path")
const logger = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const mongoose = require("mongoose")

// importing routes
const restRoutes = require("./routes/rest")
const webRoutes = require("./routes/web")

// initializing app
const app = express()

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV !== "development") {
  app.use(helmet())
}
app.use(cors())

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/webskitters-blog", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", webRoutes)
app.use("/api/v1", restRoutes)

// for unknown routes
app.use((req, res) => {
  res.sendStatus(404)
})

// on exit
async function graceful() {
  process.exit(0)
}

process.on("SIGTERM", graceful)
process.on("SIGINT", graceful)


module.exports = app
