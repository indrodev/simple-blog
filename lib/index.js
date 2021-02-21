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
  },

  validator({ email, password, title, description, phone, name }) { // a really simple validator
    if (email !== undefined) {
      if (!(typeof email === "string" && email.length > 0)) throw new Error("Invalid `email`")
    }
    if (password !== undefined) {
      if (!(typeof password === "string" && password.length > 0)) throw new Error("Invalid `password`")
    }
    if (title !== undefined) {
      if (!(typeof title === "string" && title.length > 0)) throw new Error("Invalid `title`")
    }
    if (description !== undefined) {
      if (!(typeof description === "string" && description.length > 0)) throw new Error("Invalid `description`")
    }
    if (phone !== undefined) {
      if (!(typeof phone === "string" && phone.length > 0)) throw new Error("Invalid `phone`")
    }
    if (name !== undefined) {
      if (!(typeof name === "string" && name.length > 0)) throw new Error("Invalid `name`")
    } 
  }
}
