BOT_TRIGGER = {
    'MESSAGE_CREATE'   : 'MESSAGE_CREATE',
    'GUILD_MEMBER_ADD' : 'GUILD_MEMBER_ADD'
};
BOT_COMMANDS = {
    'HELP'        : '!help',
    'GITHUB_LINK' : '!github',
    'TEST'        : '!test'
};
BOT_ACTIONS = {
    'GITHUB_LINK' : 'GITHUB_LINK',
    'HELP'        : 'HELP',
    'TEST'        : 'TEST'
};

function parseMessage(messageContent){
    for(let command in BOT_COMMANDS){
        if(messageContent.startsWith(BOT_COMMANDS[command])){
            return command;
        }
    }
}

function generateBotHelp(callback, userId){
    var replyStr = `You can do the following:`;
    for(let command in BOT_COMMANDS){
        replyStr += `\n- ${BOT_COMMANDS[command]} for ${command.toLocaleLowerCase()}`;
    }
    return callback(replyStr, userId, 1);
}

function generateBotTest(callback, userId){
    var replyStr = "Chal raha hun, baar baar gand mein ungli na kar chutiye!";
    return callback(replyStr, userId, 0);
}

module.exports = {
    BOT_TRIGGER,
    BOT_ACTIONS,
    parseMessage,
    generateBotHelp,
    generateBotTest
};