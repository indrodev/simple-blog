const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  _createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true
  }
})

module.exports = mongoose.model("Post", PostSchema)
