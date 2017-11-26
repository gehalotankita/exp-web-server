var express = require("express");

console.log("server starting");

var server = express();

server.get("/mypage", function(request, response) {
	response.send("hello from server " + new Date());
});

server.listen(8080, function() {
	console.log("server started at 8080");
});