const express = require("express");
const router = express.Router();

const { getUsers, signin, signup } = require("../controller/userController");
router.get("/", getUsers).post("/signin", signin).post("/signup", signup);
module.exports = router;
