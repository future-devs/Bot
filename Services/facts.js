const request = require('request');

function generateRandomFact(userId){
    request({
        url : NUMBER_FACTS_API
    },(error, response, body)=>{
        if(!error && response.statusCode == 200){
            var reply = `A fact about number {JSON.parse(body).number} just for you:smile:\n${JSON.parse(body).text}`;
            return callback(reply, userId);
        }
        else{
            console.log(error);
        }
    })
})

module.exports = {
    generateRandomFact
};
