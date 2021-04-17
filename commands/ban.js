module.exports = {
    name: 'ban',
    description: "bans a member",
    execute(message, args){
       const member = message.mentions.users.first();
       if (member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
                if(message.member.roles.cache.has('784042929781080087')){
                     message.channel.send("User has been banned");
                     
       }}
       else{
           message.reply("You can't ban this member")
       }
    }
}