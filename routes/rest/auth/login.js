const { verifyPassword, generateJwt, validator } = require("../../../lib")
const User = require("../../../models/user")

module.exports = {
  /**
   * @api {post} /login User Login
   * @apiName userLogin
   * @apiGroup Auth
   * @apiVersion  1.0.0
   * 
   * 
   * @apiParam  {String} email Email id of the user
   * @apiParam  {String} password Password of the user
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
   *     "password" : "supersecurepassword"
   * }
   * 
   * 
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "message" : "Success",
   *     "token" : "asd.sdf.asw"
   * }
   * 
   * 
   */
  async post(req, res) {
    try {
      const {
        email,
        password
      } = req.body

      if (email === undefined) return res.status(400).json({ error: true, message: "Missing required fields `email`" })
      if (password === undefined) return res.status(400).json({ error: true, message: "Missing required fields `password`" })
      // validation
      validator(req.body)
      
      // fetch user
      const user = await User.findOne({ email }).exec()
      if(user === null) return res.status(400).json({ error: true, message: "No user found" })

      // check password
      const isMatched = await verifyPassword(password, user.password)
      if (!isMatched) return res.status(400).json({ error: true, message: "Credential Mismatch!" })
      
      // create token
      const token = await generateJwt({
        id: String(user._id),
        name: user.name,
        email: user.email
      })

      return res.status(200).json({ error: false, message: "Success", token })
    } catch (err) {
      return res.status(500).json({ error: true, message: err.message })
    }
  }
}
