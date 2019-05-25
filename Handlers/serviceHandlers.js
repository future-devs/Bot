const serviceDivider = require('../Services/serviceDivider.js');
const botTriggers     = require('../utils.js');

function serviceHandler(eventCode, dataValue){
    if(eventCode == 'READY'){
        console.log(`Logged In as ${dataValue.user.username}#${dataValue.user.discriminator}`);
    }
    else{
        console.log(eventCode);
        console.log("Data Value JSON:");
        console.log(dataValue);
        if(eventCode == botTriggers.BOT_TRIGGER.MESSAGE_CREATE){
            serviceDivider.provideService(dataValue.content, dataValue.author.id);
        }
        else if(eventCode == botTriggers.BOT_TRIGGER.GUILD_MEMBER_ADD){
            serviceDivider.greetings(dataValue.user.id);
        }
    }
}

module.exports = {
    serviceHandler
};