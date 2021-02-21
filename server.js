const http = require("http")
const app = require("./app")

// assigning port
const PORT = parseInt(process.env.PORT || "3000", 10)

const server = http.createServer(app)

// started listener
server.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`)
})
