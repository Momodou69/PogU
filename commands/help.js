// const Discord = require('discord.js');
// module.exports = {
//     name: 'help',
//     description: "embed!",
//     execute(message, args, Discord){
//         const newEmbed = new Discord.MessageEmbed()
//             .setColor('ff0000')
//             .setTitle('Help')
//             .setThumbnail('https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/3x')
//             .setAuthor('Spoozy666#7576')
//             .setDescription('The commands assigned to this bot are:')
//             .addFields(
//                 { name: 'Pog ban', value: 'Bans a member of your choice'},
//                 { name: 'Pog kick', value: 'Kicks a member of your choice'},
//                 { name: 'Pog ping', value: 'A command responding "Pong", used for testing purposes'},
//                 { name: 'Pog mute', value: 'Mutes a member of your choice, add a number followed by "s, m, h, d" to time the mute'},
//                 { name: 'Pog unmute', value: 'Unmutes a member even if the mute is timed'},
//                 { name: 'Pog clear', value: 'Clears messages of a n argument'},
//                 { name: 'Pog member', value: 'Creates a member validation message, be sure to have a member role called "Server Members"'},
//             )
//             .setImage('https://cdn.betterttv.net/emote/5ff827395ef7d10c7912c106/3x')
//             .setTimestamp()
//             .setFooter('Note: to have the mute working, set a role called MUTED with the restriced permissions you want to give to the muted person.');
//             channel.send(newEmbed);
//     }
// }
const Discord = require('discord.js');

// inside a command, event listener, etc.
module.exports = {
        name: 'help',
       description: "embed!",
        execute(message, args, Discord){
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);
    }
}