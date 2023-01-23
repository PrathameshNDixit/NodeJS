const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const uri = process.env.URI;
module.exports = () => {
    try {
        mongoose.connect(
            uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            () => {
                console.log("connected!");
            }
        );
    } catch (e) {
        console.log(e);
    }
};
