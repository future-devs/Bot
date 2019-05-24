require('dotenv').config();
const webSocket = require('ws');

let discordSocket = null;

function connect(){
    console.log("connecting to discord gateway");
    discordSocket           = new webSocket(process.env.GATEWAY_URL);
    discordSocket.onmessage = messageHandler;
    discordSocket.onclose   = connect;
}

function messageHandler(message){
    var dataObject = JSON.parse(message.data);
    var opCode     = dataObject.op;
    var eventCode  = dataObject.t;
    var dataValue  = dataObject.d;

    if(opCode == 10){
        var credentials = {
            "token"      : `${process.env.DISCORD_BOT_TOKEN}`,
            "properties" : {
                "$os"      : "linux",
                "$browser" : " ",
                "$device"  : " "
            }
        }
        var payload = {
            "op" : 2,
            "d"  : credentials
        };
        discordSocket.send(JSON.stringify(payload));

        setInterval(function(){
            var payload = {
                "op" : 1,
                "d"  : null
            };
            discordSocket.send(JSON.stringify(payload));
        },dataValue.heartbeat_interval);
    }
    else if(opCode == 0 && eventCode == 'READY'){
        console.log(`Logged In as ${dataValue.user.username}#${dataValue.user.discriminator}`);
    }
}

module.exports = {
    connect
};