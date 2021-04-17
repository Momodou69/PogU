module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        message.channel.send("Commands: Pog ping, Pog hello, Pog modapplication, Pog help (this command) and a secret command")
    }
}