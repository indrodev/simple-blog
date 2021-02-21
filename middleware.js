const path = require("path")
const fs = require("fs")
const multer = require("multer")
const { verifyJwt } = require("./lib")

module.exports = {
  checkJwt: async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        try {
          const user = await verifyJwt(token)
          req.user = user // for passing the data to next middleware function
          next()
        } catch (err) {
          res.sendStatus(401)
        }
    } else {
        res.sendStatus(401)
    }
  },
  dynamicFileStorage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const filePath = path.join(__dirname, "./public/images")
      try {
        await fs.promises.access(filePath)
      } catch (err) {
        await fs.promises.mkdir(filePath, { recursive: true })
      }
      cb(null, filePath)
    },
    filename: (req, file, cb) => {
      const originalName = file.originalname.split(".")
      const fileName = originalName[0].split(" ").join("-")
      const extension = originalName[originalName.length - 1]
      cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
  })
}
