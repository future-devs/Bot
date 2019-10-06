require('dotenv').config();
const request = require('request');

function getMembers(){
    var list = {};
    request({
        url : 'https://discordapp.com/api/v6/guilds/526630690612183050/members',
        headers : {
            Authorization : `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        qs : {
            limit : 1000
        },
        method : 'GET'
    },async function(e,r,b){
        list = await JSON.parse(b);
        console.log(list);
    });
    console.log('hello');
    console.log(list);
    return list;
}

module.exports = {
    getMembers
};