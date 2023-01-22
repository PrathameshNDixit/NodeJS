const User = require("../models/User");
const signupController = async (req, res) => {
    console.log("signup controller");
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send("email and password are required");
        return;
    }
    const user = await User.findOne({ email });
    if (user) {
        res.status(403).send("already exists");
        return;
    }
    const newUser = new User({ email, password });
    newUser.save();
    res.status(200).send({
        print: email,
    });
};
const loginController = async (req, res) => {
    console.log("login controller");
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        res.status(403).send("email and password are required");
        return;
    }
    const user = await User.findOne({ email });
    if (!user) {
        res.status(404).send("not found");
        return;
    }
    if (user.password !== password) {
        res.status(401).send("incorrect password");
        return;
    }
    res.status(200).send({
        email: user.email,
        login: "successful",
    });
};
module.exports = {
    loginController,
    signupController,
};
