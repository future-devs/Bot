const discordSocket = require('./Handlers/webSocket.js');
const addMember     = require('./Services/addMember.js');

function connect(){
    discordSocket.connect();
}

function changePermissions(){
    addMember.addMember();
}

module.exports = {
    connect,
    changePermissions
}