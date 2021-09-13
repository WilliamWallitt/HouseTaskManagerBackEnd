const mongoose = require("mongoose")
const schema = mongoose.Schema;
const taskSchema = new schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

    point: {
        type: schema.Types.ObjectId,
        ref: "Point"
    }


})

const Task = mongoose.model("Task", taskSchema)
module.exports = Task