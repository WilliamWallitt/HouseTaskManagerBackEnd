const mongoose = require("mongoose")
const schema = mongoose.Schema
const userSchema = new schema({
    userName: {
        type: String,
        required: true
    },
    authorization: {
        type: mongoose.Types.Decimal128,
        default: 0,
        required: false
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User