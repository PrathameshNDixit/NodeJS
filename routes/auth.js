const express = require("express");
const { loginController, signupController } = require("../controllers/auth");
const router = express.Router();
router.get("/login", loginController);
router.get("/signup", signupController);
module.exports = router;
