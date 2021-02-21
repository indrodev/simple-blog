// all rest routes
const router = require("express").Router()
const { checkJwt } = require("../../middleware")
const login = require("./auth/login")
const signup = require("./auth/signup")

const users = require("./users")
const posts = require("./posts")

/* Un-Authenticated Routes */

/* Auth */
router.post("/login", login.post)
router.post("/signup", signup.post)

router.all("*", checkJwt)
/* Authenticated Routes */

/* Users */
router.get("/user/:id", users.get)
router.get("/users/posts", users.find)

/* Posts */
router.get("/posts", posts.find)
router.get("/post/:id", posts.get)
router.post("/post", posts.post)


module.exports = router
