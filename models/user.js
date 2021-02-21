const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String
  },

  password: {
    type: String,
    required: true
  },
  
  image: {
    type: String
  }
})

UserSchema.pre("save", async function (next) { // a pre hook that replaces the string password to encrypted
  const user = this
  if (this.isModified("password") || this.isNew) {
    try {
      user.password = await bcrypt.hash(
        user.password, +process.env.SALT_ROUNDS || 10
      )
    } catch (error) {
      return next(error)
    }
  }
  return next()
})

module.exports = mongoose.model("User", UserSchema)
