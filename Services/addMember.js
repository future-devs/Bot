const user = require('../Models/userReg.js');
const guild  =  require('../Handlers/requestAPI.js');

async function addMember(){
    await user.find({member : 'NO'}, async function(error, users){
        if(error){
            console.log(error);
        }
        else{
            var list = await guild.getMembers();
            console.log(list);
        }
    });
}
module.exports = {
    addMember
}
