const express = require("express")
const timeMiddleWare = require("./middleware")
const bodyParser = require('body-parser')


app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(timeMiddleWare)
app.use(require("./Routes/taskAPI"))
app.use(require("./Routes/logAPI"))
app.use(require("./Routes/userAPI"))

app.listen(3000, () => console.log("Server started"))

