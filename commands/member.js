module.exports = {
    name: 'member',
    description: "adds people to the member role",
    execute(message, args) {


        if(message.member.roles.cache.has('784042929781080085')){
            message.channel.send('You already are a server member');
    } 
    else{
        message.member.roles.add('784042929781080085')
        message.reply('Added you the member role')
    }
    }} 
