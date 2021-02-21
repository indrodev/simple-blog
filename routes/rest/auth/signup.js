const User = require("../../../models/user")

module.exports = {
  /**
   * @api {post} /signup User Signup
   * @apiName userSignup
   * @apiGroup Auth
   * @apiVersion  1.0.0
   * 
   * 
   * @apiParam  {String} name Full name of the user
   * @apiParam  {String} phone Phone number of the user
   * @apiParam  {String} email Email id of the user
   * @apiParam  {String} password Password of the user
   * @apiParam  {file} image Profile image of the user
   * 
   * @apiSuccess (200) {Boolean} error
   * @apiSuccess (200) {String} message
   * @apiSuccess (200) {String} token
   * 
   * @apiError (4xx|5xx) {Boolean} error
   * @apiError (4xx|5xx) {String} message
   * 
   * 
   * @apiParamExample  {json} Request-Example:
   * {
   *     "email" : "somebody@example.com",
   *     "password" : "supersecurepassword",
   *     "phone" : "9038549891",
   *     "name" : "Indrajit Roy",
   * }
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "User created successfully",
   * }
   * 
   * 
   */
  async post(req, res) {
    try {
      const {
        name,
        email,
        password,
        phone,
        // image
      } = req.body

      if (name === undefined) return res.status(400).json({ error: false, message: "Missing required fields `name`" })
      if (email === undefined) return res.status(400).json({ error: false, message: "Missing required fields `email`" })
      if (password === undefined) return res.status(400).json({ error: false, message: "Missing required fields `password`" })
      if (phone === undefined) return res.status(400).json({ error: false, message: "Missing required fields `phone`" })
      
      // check if email already exists
      const checkEmail = await User.findOne({ email }).exec()
      if (checkEmail !== null) return res.status(400).json({ error: false, message: "User with this `email` already exists" })
      
      await User.create({
        name,
        email,
        password,
        phone
      })
      
      return res.status(201).json({ error: false, message: "User created successfully" })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  }
}
