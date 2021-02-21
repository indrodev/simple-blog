const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const User = require("../../models/user")

module.exports = {
  /**
   * @api {get} /users/posts Fetch user's list with posts
   * @apiName userFetch
   * @apiGroup User
   * @apiVersion  1.0.0
   * 
   * @apiHeader {String} Authorization The `token` which was generated at the time of login. Example: `Bearer <token>`
   *
   * @apiSuccess (200) {Boolean} error
   * @apiSuccess (200) {String} message
   * @apiSuccess (200) {Object[]} users
   * 
   * @apiError (4xx|5xx) {Boolean} error
   * @apiError (4xx|5xx) {String} message
   * 
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "Success",
   *     "users" : []
   * }
   * 
   * 
   */
  async find(req, res) {
    try {
      const users = await User.aggregate([
        {
          $lookup:
          {
            from: "posts",
            localField: "_id",
            foreignField: "_createdBy",
            as: "posts",
          }
        },
        {
          $project: { "password": 0 }
        }
      ])
      
      if(users.length === 0) return res.status(400).json({ error: true, message: "No users found" })

      return res.status(200).json({ error: false, message: "Success", users })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  },

  /**
   * @api {post} /user/:id User Details
   * @apiName userDetails
   * @apiGroup User
   * @apiVersion  1.0.0
   * 
   * @apiHeader {String} Authorization The `token` which was generated at the time of login. Example: `Bearer <token>`
   * 
   * @apiParam  {String} id User's _id
   * 
   * @apiSuccess (200) {Boolean} error
   * @apiSuccess (200) {String} message
   * @apiSuccess (200) {Object} user
   * 
   * @apiError (4xx|5xx) {Boolean} error
   * @apiError (4xx|5xx) {String} message
   * 
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "Success",
   *     "user" : {}
   * }
   * 
   * 
   */
  async get(req, res) {
    try {
      const {
        id
      } = req.params

      let _id
      try {
        _id = ObjectId(id)
      } catch (err) {
        return res.status(400).json({ error: true, message: "Invalid `id`" })
      }
      // const user = await User.findOne({ _id: id }).select("-password").exec()
      const user = await User.aggregate([
        {
          $match: {
            _id
          }
        },
        {
          $project: {
            password: false
          }
        }
      ]).exec()
      if(user.length === 0) return res.status(400).json({ error: true, message: "No user found" })

      // eslint-disable-next-line max-len
      user[0].imageUrl = user[0].image !== undefined ? `${process.env.SITE_URL}/images/${user[0].image}`: undefined
      return res.status(200).json({ error: false, message: "Success", user: user[0] })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  }
}
