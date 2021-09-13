const router = require("express")()
const Log = require("../Database/LogSchema")
const DBClass = require("../Database/db")
const Mongoose = require("mongoose");

const DBUser = new DBClass("mongodb://127.0.0.1:27017/mads", Log)


router.get("/logs", function (req, res) {
    DBUser.getAllObjects(["user task point"]).then(logData => res.send(logData))
})

router.post("/logs", function (req, res) {

    DBUser.createNewObject({
        user: req.body.userId,
        task: req.body.taskId,
        point: req.body.pointId,
        timeLogged: Date.now()
    }).then(response => res.send(response))
})

module.exports = router