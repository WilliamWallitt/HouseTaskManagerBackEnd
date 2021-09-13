const timeMiddleWare = function (req, res, next) {
    console.log("Request made at -> " + new Date((Date.now() * 1000)))
    next()
}

module.exports = timeMiddleWare