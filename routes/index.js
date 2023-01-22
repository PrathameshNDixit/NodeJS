const router = require("express").Router();
const authRouter = require("./auth");
const homeRouter = require("./home");
router.use("/auth", authRouter);
router.use("/home", homeRouter);
module.exports = router;
