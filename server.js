require('dotenv').config();
const http = require("http");
http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Home of FutureDevs Bot");
}).listen(process.env.PORT, function(){
    console.log(process.env.PORT);
    console.log('Server Started');
});