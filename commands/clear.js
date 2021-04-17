module.exports = {
    name: 'clear',
    description: "clear the last X messages",
    async execute(message, args){

        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear");
        if(isNaN(args[0])) return message.reply("Please enter the amount of messages you want to clear");

        if(args[0] > 100) return message.reply("You can only clear 1-100 messages")
        if(args[0] < 1) return message.reply("You can only clear 1-100 messages")

        if(message.member.roles.cache.has('784042929781080087')){
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);})

        }
    }
}