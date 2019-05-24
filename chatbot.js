const discordSocket = require('./Handlers/webSocket.js');

function connect(){
    discordSocket.connect();
}

module.exports = {
    connect
}