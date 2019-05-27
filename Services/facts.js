const request = require('request');

function generateRandomFact(userId){
    request({
        url : NUMBER_FACTS_API
    })
}