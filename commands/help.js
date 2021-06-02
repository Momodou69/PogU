const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "embed!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('ff0000')
            .setTitle('Help')
            .setThumbnail('https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/3x')
            .setAuthor('Spoozy')
            .setDescription('The commands assigned to this bot are:')
            .addFields(
                { name: 'Pog ban', value: 'Bans a member of your choice'},
                { name: 'Pog kick', value: 'Kicks a member of your choice'},
                { name: 'Pog ping', value: 'A command responding "Pong", used for testing purposes'},
                { name: 'Pog mute', value: 'Mutes a member of your choice, add a number followed by "s, m, h, d" to time the mute'},
                { name: 'Pog clear', value: 'Clears messages of a n argument'},
            )
            .setImage('https://cdn.betterttv.net/emote/5ff827395ef7d10c7912c106/3x')
            .setTimestamp()
            .setFooter('If you have any questions, please contact the mods in private messages');
            message.channel.send(newEmbed);
    }
}