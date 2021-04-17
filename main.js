const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'Pog ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
     console.log('PogU bot is online');
});
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Server Members')
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('784042930503417878').send(`Welcome <@${guildMember.user.id}> to this server! Check out the rules`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    }

    if(command === 'smoke'){
        client.commands.get('smoke').execute(message, args);
    }

    if(command === 'modapplication'){
        client.commands.get('modapplication').execute(message, args);
    }

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }

    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }

    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }

    if(command === 'member'){
        client.commands.get('member').execute(message, args);
    }
    if(command === 'uselessembed'){
        client.commands.get('uselessembed').execute(message, args);
    }
});

client.login(''); 

//Invite full perms 'https://discord.com/oauth2/authorize?client_id=819567089572118548&scope=bot&permissions=2147483647'