const Discord = require('discord.js');
require('dotenv').config();
const env = process.env;
const client = new Discord.Client();
const prefix = process.env.PREFIX;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix.length) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'ping') {
    message.reply('Pong!');
  }
});
client.login(process.env.BOT_TOKEN);
client.on('message' , function(message){
    if(message.content == 'Test')
    {
        message.channel.sendMessage('Testing what?' + ' , ' + message.author);
    }
});
client.on('ready' , function(){
    console.log('Ready');
})

client.on('guildMemberAdd', member => {
    console.log('that event fired')
    member.guild.channels.get('492391181553106944').send(`:VMark:${member} (${member.user.tag}) has joined the server.\nTotal Member Count: ${member.guild.memberCount} members!`);
});

client.on('guildMemberRemove', member => {
    console.log('that event fired')
    member.guild.channels.get('492391181553106944').send(`:deny:${member} (${member.user.tag}) has left the server\nTotal Member Count: ${member.guild.memberCount} members`);
});
