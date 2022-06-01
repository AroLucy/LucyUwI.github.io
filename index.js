const express = require("express");
const app = express();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

app.use(express.static(__dirname + "/"), (_, res, next) => {
	res.status(404)
	res.sendFile(__dirname + "/not_found.html")
});

setInterval(() => {}, 1 << 30);
app.listen(8080);
