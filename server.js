require('dotenv').config();
const chatbot        = require('./chatbot.js');
const http           = require("http");
const fs             = require('fs');
const mongoose       = require('mongoose');
const regUser        = require('./Models/userReg.js');

mongoose.connect("mongodb://localhost:27017/discordRegUsers", { useNewUrlParser: true });

function handleRequest(req, res){
    if(req.url == '/signUp' && req.method == 'GET'){
        fs.readFile('views/form.html',function(error, data){
            if(error){
                console.log(error)
            }
            else{
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
    }
    else if(req.url == '/signUp' && req.method == 'POST'){
        res.writeHead(200);
        var newUser = {
            userHandle : 'darksun27',
            dob        : '27-06-1998'
        };
        regUser.create(newUser, function(error, callback){
            if(error){
                console.log(error);
            }
            else{
                res.write("done uploading");
                res.end();
            }
        });
        chatbot.changePermissions();
    }
}

http.createServer(handleRequest).listen(process.env.PORT, function(){
    console.log(process.env.PORT);
    console.log('Server Started');
    chatbot.connect();
});