const Discord = require("discord.js")
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
  
bot.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome-goodbye');
  if (!channel) return;
  if(channel) return channel.send("Selamat Datang");
   })
}