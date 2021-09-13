const mongoose = require("mongoose")
const schema = mongoose.Schema


const PointSchema = new schema({
    point: {
        type: schema.Types.Number,
        required: true
    }
})

const Point = mongoose.model("Point", PointSchema)
module.exports = Point