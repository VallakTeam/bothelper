const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `**${guild.name}** Members: ${guild.memberCount}`).join('\n');
  
  let embed = new Discord.RichEmbed()
  .setTitle(`I am in ${bot.guilds.size} guilds!`)
  .setDescription(`${msg}`)
  .addField("Server", bot.guilds.size)
  .addField("Channel", bot.channels.size)
  .addField("User", bot.users.size)
  .addField("**Bot**", `${bot.user.tag}`)
  .setColor("RANDOM");
  message.channel.send(embed);
}


module.exports.help = {
  name: "infobot"
}