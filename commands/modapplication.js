module.exports = {
    name: 'modapplication',
    description: "this is a modapplication command",
    execute(message, args){
        message.channel.send('http://example.com/');
    }
}