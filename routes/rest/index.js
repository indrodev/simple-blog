// all rest routes
const router = require("express").Router()
const multer = require("multer")
const { checkJwt, dynamicFileStorage } = require("../../middleware")
const login = require("./auth/login")
const signup = require("./auth/signup")

const users = require("./users")
const posts = require("./posts")

/* Un-Authenticated Routes */

/* Auth */
router.post("/login", login.post)

const upload = multer({
  storage: dynamicFileStorage,
  limits: { fileSize: 1000000 * 10 } // in bytes
})

router.post("/signup", upload.single("image"), signup.post)

router.all("*", checkJwt) // middleware
/* Authenticated Routes */

/* Users */
router.get("/user/:id", users.get)
router.get("/users/posts", users.find)

/* Posts */
router.get("/posts", posts.find)
router.get("/post/:id", posts.get)
router.post("/post", posts.post)


module.exports = router
