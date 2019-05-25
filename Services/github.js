require('dotenv').config();

function github(callback, userId){
    var reply = "The Link to our Github is";
    var embed = process.env.GITHUB_LINK;
    reply += `\n${embed}`;
    return callback(reply, userId, 0); 
}

module.exports = {
    github
}