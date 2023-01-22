const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    marks: Number,
});
module.exports = mongoose.model("user", userSchema);
