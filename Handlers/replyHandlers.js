require('dotenv').config();
const request = require('request');

function postBotReply(reply, userId, embed_flag){
    var replyBody = userId ? `<@${userId}> ${reply}` : reply;
    var bodyContent = {
        "content" : replyBody,
        "tts"     : false,
    };
    embed_flag == 1 ? bodyContent = {
        "content" : `<@${userId}>`,
        "tts"     : false, 
        "embed"   : {
            "color"       : 808000,
            "title"       : "Future-Devs Bot Commands",
            "description" : reply,
            "type"        : "rich",
            "thumbnail"   : {
                "url"    : "https://png.pngtree.com/element_origin_min_pic/17/09/25/82c236d84cde152b2f2cd5f40de05d5c.jpg",
                "height" : 200,
                "width"  : 200
            }
        }
    } : bodyContent;
    request({
        url : `${process.env.DISCORD_MESSAGE_API_PREFIX}526630690612183052/messages`,
        headers : {
            Authorization : `Bot ${process.env.DISCORD_BOT_TOKEN}`
        },
        method : 'POST',
        json : true,
        body : bodyContent
    },(error, response, callback)=>{
        console.log(callback);
    });
}

module.exports = {
    postBotReply,
};