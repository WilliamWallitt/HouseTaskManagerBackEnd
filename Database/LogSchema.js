const mongoose = require("mongoose")
const schema = mongoose.Schema;
const logSchema = new schema({

    user: {
        type: schema.Types.ObjectId,
        ref: "User"
    },
    task: {
        type: schema.Types.ObjectId,
        ref: "Task"
    },
    point: {
        type: schema.Types.ObjectId,
        ref: "Point"
    },
    timeLogged: {
        type: schema.Types.Date
    }

})

const Log = mongoose.model("Log", logSchema)
module.exports = Log