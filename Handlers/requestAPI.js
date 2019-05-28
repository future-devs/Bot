require('dotenv').config();
const axios = require('axios');

function getMembers(){
    var list = {};
    axios.get('https://discordapp.com/api/v6/guilds/526630690612183050/members',
              {headers: {
          "Authorization" : `Bot ${process.env.DISCORD_BOT_TOKEN}`
        }
      }
             ).then((res)=>{
        list = JSON.parse(res);
        console.log(list);
    }
    
    )

module.exports = {
    getMembers
};
