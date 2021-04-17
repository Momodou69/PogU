module.exports = {
    name: 'unmute',
    description: "unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Server Members');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'MUTED');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id)
            memberTarget.roles.add(mainRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
        }
        else{
            message.reply("Can't find that member")
        }
    }
}