const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
bot.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === '『🌍』welcome-goodbye');
  message.channel.send("Selamat Datang");
   }
}