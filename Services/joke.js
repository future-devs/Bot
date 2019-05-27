const request = require('request');

function getRandomJoke(callback, userId){
    request({
        url : process.env.JOKE_API
    }, (error, response, body)=>{
        if(!error && response.statusCode == 200){
            var reply = `a joke specially for you hope it makes your day better :smile:\n${JSON.parse(body).setup}\n${JSON.parse(body).punchline}`;
            return callback(reply, userId);
        }
        else{
            console.log(error);
        }
    })
}

module.exports = {
    getRandomJoke
};