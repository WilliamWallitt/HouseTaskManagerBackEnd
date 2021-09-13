const router = require("express")()
const User = require("../Database/UserSchema")
const DBClass = require("../Database/db")
const Mongoose = require("mongoose");

const DBUser = new DBClass("mongodb://127.0.0.1:27017/mads", User)

// routes

router.get("/users", function (req, res) {
    DBUser.getAllObjects().then(userData => res.send(userData))
})

router.post("/users", function (req, res) {
    DBUser.createNewObject({
        userName: req.body.userName,
        authorization: parseInt(req.body.authorization)
    }).then(response => res.send(response))
})

router.delete("/users/:userId", function (req, res) {
    DBUser.deleteObject(req.params.userId).then(response => res.send(response))
})

module.exports = router