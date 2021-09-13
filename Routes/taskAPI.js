const router = require("express")()
const Task = require("../Database/TaskSchema")
const Point = require("../Database/PointSchema")
const DBClass = require("../Database/db")
const Obj = require("mongoose");
const DBPoint = new DBClass( "mongodb://127.0.0.1:27017/mads", Point)
const DBTask = new DBClass("mongodb://127.0.0.1:27017/mads", Task)


// get all tasks
router.get("/tasks", function (req, res) {

    DBTask.getAllObjects(["point"]).then(taskData => {
        res.send(taskData)
    })

})

// get one task (id)
router.get("/tasks/:taskId", function (req, res) {
    DBTask.getObject(req.params.taskId, ["point"]).then(taskData => {
        res.send(taskData)
    })
})

// add a task
router.post("/tasks", function (req, res) {


    const pointObj = {
        point: parseInt(req.body.point)
    }
    DBPoint.createNewObject(pointObj).then(data => {
        const taskObj = {
            name: req.body.name,
            description: req.body.description,
            point: data._id
        }
        DBTask.createNewObject(taskObj).then(d => res.send({message: d}))

    })


})

// delete a task
router.delete("/tasks/:taskId", function (req, res) {
    DBTask.deleteObject(req.params.taskId).then(taskData => {
        DBPoint.deleteObject(req.body.pointId).then(pointData => {
            res.send({...taskData, ...pointData})
        })
    })
})

// edit a task

router.put("/tasks/:taskId", function (req, res) {

    DBTask.editObject(req.params.taskId, {
        name: req.body.name,
        description: req.body.description,
    }).then(t => {
        DBPoint.editObject(req.body._id, {
            point: req.body.point
        }).then(p => res.send({...t, ...p}))
    })

})




module.exports = router
