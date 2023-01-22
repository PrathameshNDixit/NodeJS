const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send({
        name: "Welcome home",
    });
});
router.get("/all", (req, res) => {
    res.send({
        name: "home all",
    });
});
module.exports = router;
