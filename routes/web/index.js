// all web routes
const router = require("express").Router()

router.get("/", (req, res) => {
  return res.send("API Service Working 👍🏻")
})

module.exports = router
