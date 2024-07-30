

var server, arg
exports.server = function(){
    const http = require("http")
    server = http.createServer(arg);
    server.listen()
}