module.exports = {
    name: 'uselessembed',
    execute(message, args, Discord) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('basically useless')
        .setURL('https://twitch.tv/spoozy666/')
        .setDescription('bruh')
        .addField('Still useless af');

        channel.send(exampleEmbed);
        }
    }