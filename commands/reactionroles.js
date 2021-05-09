module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    async execute(message, args, Discord, client){
        const channel = '839190584341168179'
        const VC = message.guild.roles.cache.find(role => role.name === "VC")

        const VCEmoji = '📣';

        let embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Choose your roles')
            .setDescription('Choose your roles here : \n\n'
                + `${VCEmoji} for Voice Channel access`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(VCEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === VCEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(VC);
                } else {
                    return;
                }
            }
        });
        
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === VCEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(VC);
                } else {
                    return;
                }
            }
        });
    }
}