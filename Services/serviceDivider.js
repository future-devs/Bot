const botReply  = require('../Handlers/replyHandlers.js');
const util      = require('../utils.js');
const repLink   = require('./github.js');
const jokeServe = require('./joke.js');

function greetings(userId){
    var replyToPost = `Welcome to the server <@${userId}>! Please introduce yourself`;
    botReply.postBotReply(replyToPost, null, 0);
}

function provideService(messageContent, userId){
    var command = util.parseMessage(messageContent);
    if(command == util.BOT_ACTIONS.GITHUB_LINK){
        repLink.github(botReply.postBotReply, userId)
    }
    else if(command == util.BOT_ACTIONS.HELP){
        util.generateBotHelp(botReply.postBotReply, userId);
    }
    else if(command == util.BOT_ACTIONS.TEST){
        util.generateBotTest(botReply.postBotReply, userId);
    }
    else if(command == util.BOT_ACTIONS.JOKE){
        jokeServe.getRandomJoke(botReply.postBotReply, userId);
    }
}

module.exports = {
    greetings,
    provideService
};