const mongoose = require("mongoose");
const uri =
    "mongodb+srv://Prathamesh:pstj9wjOXZjXXBTy@cluster0.kozffvs.mongodb.net/?retryWrites=true&w=majority";
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
