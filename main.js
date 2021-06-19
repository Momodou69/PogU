const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = 'Pog ';

const fs = require('fs');

const memberCounter = require('./counters/member-counter')

client.commands = new Discord.Collection();

const user = client.users.cache.get("849728581218205727");

const commandFiles = fs.readdirSync('commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
     console.log(`${client.tag} with the ID ${client.user} is online`);
     memberCounter(client);
     
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
    
    // if(command === 'hello'){
    //     client.commands.get('hello').execute(message, args);
    // }
    
    // if(command === 'smoke'){
    //     client.commands.get('smoke').execute(message, args);
    // }
    
    // if(command === 'modapplication'){
    //     client.commands.get('modapplication').execute(message, args);
    // }
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    // if(command === 'rules'){
    //     client.commands.get('rules').execute(message, args, Discord);
    // }

    if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    }

    if(command === 'leave'){
         client.commands.get('leave').execute(message, args, Discord);
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
    // if(command === 'uselessembed'){
    //     client.commands.get('uselessembed').execute(message, args);
    // }
    // if(command === 'reactionrole'){
    //     client.commands.get('reactionrole').execute(message, args, Discord, client);
    // }
});

client.login("ODQ5NzI4NTgxMjE4MjA1NzI3.YLfZaA.bCe5II3fwqJUyfdVXL2Z3VeZoeM"); 
