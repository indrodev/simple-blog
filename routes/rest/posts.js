const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const Post = require("../../models/post")

module.exports = {
  /**
   * @api {get} /posts Fetch All Posts
   * @apiName postsFetch
   * @apiGroup Post
   * @apiVersion  1.0.0
   * @apiPermission users
   * 
   * @apiHeader {String} Authorization The `token` which was generated at the time of login. Example: `Bearer <token>`
   * 
   * @apiSuccess (200) {Boolean} error
   * @apiSuccess (200) {String} message
   * @apiSuccess (200) {Object[]} posts
   * 
   * @apiError (4xx|5xx) {Boolean} error
   * @apiError (4xx|5xx) {String} message
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "Success",
   *     "posts" : {}
   * }
   * 
   * 
   */
  async find(req, res) {
    try {
      
      // const post = await Post.find({}).populate("_createdBy", "-password").exec()
      const posts = await Post.aggregate([
        {
          $lookup:
          {
            from: "users",
            localField: "_createdBy",
            foreignField: "_id",
            as: "createdBy",
          }
        },
        { 
          $project: { title: 1, description: 1, createdBy: {$arrayElemAt:["$createdBy",0]} }
        },
        {
          $project: { "createdBy.password": 0 }
        }
      ])
      
      if(posts.length === 0) return res.status(400).json({ error: true, message: "No posts found" })

      return res.status(200).json({ error: false, message: "Success", posts })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  },
  /**
   * @api {get} /post/:id Post Details
   * @apiName postDetails
   * @apiGroup Post
   * @apiVersion  1.0.0
   * @apiPermission users
   * 
   * @apiHeader {String} Authorization The `token` which was generated at the time of login. Example: `Bearer <token>`
   * 
   * @apiParam  {String} id Post's _id 
   * 
   * @apiSuccess (200) {Boolean} error
   * @apiSuccess (200) {String} message
   * @apiSuccess (200) {Object} post
   * 
   * @apiError (4xx|5xx) {Boolean} error
   * @apiError (4xx|5xx) {String} message
   * 
   * 
   * @apiParamExample  {json} Request-Example:
   * {
   *     "email" : "somebody@example.com",
   *     "password" : "supersecurepassword"
   * }
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "User Authenticated",
   *     "token" : "asd.sdf.asw"
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
      // const post = await Post.findOne({ _id: id }).populate("_createdBy", "-password").exec()
      const post = await Post.aggregate([
        {
          $match: {
            _id
          }
        },
        {
          $lookup:
          {
            from: "users",
            localField: "_createdBy",
            foreignField: "_id",
            as: "createdBy",
          }
        },
        { 
          $project: { title: 1, description: 1, createdBy: {$arrayElemAt:["$createdBy",0]} }
        },
        {
          $project: { "createdBy.password": 0 }
        }
      ])

      if(post.length === 0) return res.status(400).json({ error: true, message: "No post found" })

      return res.status(200).json({ error: false, post: post[0] })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  },
  /**
   * @api {post} /post Create a new post
   * @apiName postCreate
   * @apiGroup Post
   * @apiVersion  1.0.0
   * @apiPermission users
   * 
   * @apiHeader {String} Authorization The `token` which was generated at the time of login. Example: `Bearer <token>`
   * 
   * @apiParam  {String} title Title of the post
   * @apiParam  {String} description Description of the post
   * 
   * @apiSuccess (200) {Boolean} error
   * @apiSuccess (200) {String} message
   * @apiSuccess (200) {Object} post
   * 
   * @apiError (4xx|5xx) {Boolean} error
   * @apiError (4xx|5xx) {String} message
   * 
   * 
   * @apiParamExample  {json} Request-Example:
   * {
   *     "title" : "This is a sample title",
   *     "description" : "This is a dummy desc"
   * }
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "Success",
   *     "post" : {}
   * }
   * 
   * 
   */
  async post(req, res) {
    try {
      const {
        title,
        description
      } = req.body

      if (title === undefined) return res.status(400).json({ error: true, message: "Missing required fields `title`" })
      if (description === undefined) return res.status(400).json({ error: true, message: "Missing required fields `description`" })

      const post = await Post.create({
        title,
        description,
        _createdBy: req.user.id
      })

      return res.status(200).json({ error: false, post })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  }
}
