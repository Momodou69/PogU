const Discord = require('discord.js');
module.exports = {
    name: 'rules',
    description: "embed!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('ff0000')
            .setTitle('Rules')
            .setURL('https://twitch.tv/spoozy666')
            .setThumbnail('https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/3x')
            .setAuthor('Spoozy')
            .setDescription('The rules of this server are:')
            .addFields(
                { name: 'Rule N°1', value: 'No NSFW under any circumpstances'},
                { name: 'Rule N°2', value: "Don't flood the channels for nothing"},
                { name: 'Rule N°3', value: 'Do not ping @everyone without permission'},
                { name: 'Rule N°4', value: 'Do not ping @GOD HIMSELF or @SATAN HIMSELF , send a message to @Discord Mods to be forwarded'},
                { name: 'Rule N°5', value: 'Please have a chill attitude'},
                { name: 'Rule N°6', value: 'Do not disrespect anyone, even to make fun'},
                { name: 'Rule N°7', value: 'Have an appropriate name'},
                { name: 'Rule N°8', value: "Private questions belong to private messages, not to the server's rooms"},
                { name: 'Rule N°9', value: 'No self promotion except from #share-your-videos🎦 and #🎬game-highlights'},
            )
            .setImage('https://cdn.betterttv.net/emote/5ff827395ef7d10c7912c106/3x')
            .setTimestamp()
            .setFooter('If you have any questions, please contact the mods in private messages');
            message.channel.send(newEmbed);
    }
}