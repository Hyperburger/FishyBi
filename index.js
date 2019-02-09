const Commando = require('discord.js-commando');
const bot = new Commando.Client();
client.login(process.env.BOT_TOKEN);

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('message' , function(message){
    if(message.content == 'Test')
    {
        message.channel.sendMessage('Testing what?' + ' , ' + message.author);
    }
});
bot.on('ready' , function(){
    console.log('Ready');
})

bot.on('guildMemberAdd', member => {
    console.log('that event fired')
    member.guild.channels.get('492391181553106944').send(`:VMark:${member} (${member.user.tag}) has joined the server.\nTotal Member Count: ${member.guild.memberCount} members!`);
});+ 

bot.on('guildMemberRemove', member => {
    console.log('that event fired')
    member.guild.channels.get('492391181553106944').send(`:deny:${member} (${member.user.tag}) has left the server\nTotal Member Count: ${member.guild.memberCount} members`);
});
