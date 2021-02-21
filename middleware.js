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
  }
}
