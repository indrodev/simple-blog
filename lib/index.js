const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
  generateJwt(payload) {
    return new Promise((resolve, reject) => {
      const options = {
        algorithm: "HS256",
        expiresIn: 3600 * 24 * 30 // 1 month
      }
      jwt.sign(
        payload,
        process.env.APP_SECRET || "This is a super secret key",
        options,
        (err, token) => {
          if (err) {
            reject(err)
          }
          resolve(token)
        })
    })
  },

  verifyJwt(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.APP_SECRET || "This is a super secret key", function(err, decoded) {
        if (err) {
          reject(err)
        }
        resolve(decoded)
      })
    })
  },

  async verifyPassword(password, encryptedPassword) {
    const isMatch = await bcrypt.compare(password, encryptedPassword)
    return isMatch
  }
}
