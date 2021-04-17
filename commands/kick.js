module.exports = {
    name: 'kick',
    description: "kicks a member",
    execute(message, args){
       const member = message.mentions.users.first();
       if (member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
                if(message.member.roles.cache.has('784042929781080087')){
                    message.channel.send("User has been kicked");
       }}
       else{
           message.reply("You can't kick this member")
       }
    }
}