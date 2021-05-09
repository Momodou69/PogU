module.exports = async (client) => {
    const guild = client.guilds.cache.get('784042929781080084');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('839215366856376390');
        channel.setName(`MEMBERS: ${memberCount.toLocaleString()}`);
        console.log(`Updating member count, new member count is ${memberCount}`);
    }, 600000);
}